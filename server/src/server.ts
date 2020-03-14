import 'reflect-metadata';
import { ApolloServer, ApolloError } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {
  getComplexity,
  fieldConfigEstimator,
  simpleEstimator
} from 'graphql-query-complexity';

import { authenticateToken } from './middleware/authentication/authenticate-token';
import { createSchema } from './schema/create-schema';
import { initializeConnection } from './utilities/connection/initialize-connection';
import { separateOperations, GraphQLError } from 'graphql';
import { MaxComplexityError } from './lib/cursors/errors/complexity';
import { isDevelopment, isTesting, isProduction, ENV_DEVELOPMENT, ENV_TESTING, ENV_PRODUCTION } from './utilities/env/node-env';
import { ArgumentValidationError } from 'type-graphql';
import { logInternalError } from './utilities/error/log-internal';

function formatGraphqlError (error: GraphQLError) {
  if(error.originalError instanceof ApolloError) return error;
  if(error.originalError instanceof ArgumentValidationError) {
    if(error.extensions) error.extensions.code = 'GRAPHQL_VALIDATION_FAILED';
    return error;
  }

  return new GraphQLError(`Internal Server Error: ${logInternalError(error)}`);
}

async function main() {
  const connection = await initializeConnection();

  /**
   * NODE_ENV must be setup
   */
  if(!isDevelopment() && !isTesting() && !isProduction()) 
    throw new Error(`NODE_ENV must be ${ENV_DEVELOPMENT} || ${ENV_TESTING} || ${ENV_PRODUCTION}`);
  
  /**
   * Only run database migrations on production
   * as this might destroy existing data
   */
  if(!isProduction) 
    await connection.runMigrations();

  const MAX_QUERY_COST = parseInt(process.env.MAX_QUERY_COST || '1000');

  const schema = await createSchema();
  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
    formatError: formatGraphqlError,
    plugins: [
      {
        requestDidStart: () => ({
          didResolveOperation: ({ request, document }) => {
            /**
             * Calculate request complexity and set default field cost to 1
             * 
             * If cost exceeds specified max query cost
             * throw an error and don't return data
             */
            const complexity = getComplexity({
              schema,
              query: request.operationName
                ? separateOperations(document)[request.operationName]
                : document,
              variables: request.variables,
              estimators: [
                fieldConfigEstimator(),
                simpleEstimator({ defaultComplexity: 1 })
              ]
            });
            if (complexity >= MAX_QUERY_COST) {
              throw new MaxComplexityError(complexity, MAX_QUERY_COST);
            }
          }
        })
      }
    ]
  });

  /**
   * Start up the server
   */
  const app = express();
  app.use(cookieParser());
  app.use(cors({ credentials: true, origin: process.env.ORIGIN }));
  app.use((req, res, next) => authenticateToken(req, res, next));

  server.applyMiddleware({ app });

  app.listen(process.env.PORT || 5000, () => {
    console.log(
      `Server ready at http://localhost:${process.env.PORT}${server.graphqlPath} env: ${process.env.NODE_ENV}`
    );
  });
}

main();
