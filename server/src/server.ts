import 'reflect-metadata';

import { ApolloError, ApolloServer } from 'apollo-server-express';
import {
  ENV_DEVELOPMENT,
  ENV_PRODUCTION,
  ENV_TESTING,
  isDevelopment,
  isProduction,
  isTesting
} from './utilities/env/node-env';
import { GraphQLError, separateOperations } from 'graphql';
import {
  fieldConfigEstimator,
  getComplexity,
  simpleEstimator
} from 'graphql-query-complexity';

import { ArgumentValidationError } from 'type-graphql';
import Log from './utilities/log/logger';
import { MaxComplexityError } from './lib/relay/errors/complexity';
import { authenticateToken } from './middleware/authentication/authenticate-token';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { createSchema } from './schema/create-schema';
import express from 'express';
import { initializeConnection } from './utilities/connection/initialize-connection';
import { logInternalError } from './utilities/log/log-internal-error';

/**
 * Handles and transforms the errors
 *
 * Filters out errors that should
 * and shouldn't be shown to the user
 * @param error
 */
function formatGraphqlError(error: GraphQLError) {
  if (!isProduction()) return error;
  if (error.originalError instanceof ApolloError) return error;
  if (error.originalError instanceof ArgumentValidationError) {
    if (error.extensions) error.extensions.code = 'GRAPHQL_VALIDATION_FAILED';
    return error;
  }

  return new GraphQLError(`Internal Server Error: ${logInternalError(error)}`);
}

/**
 * Starting point of the server
 */
async function main() {
  const connection = await initializeConnection();

  /**
   * NODE_ENV must be set one of the following
   */
  if (!isDevelopment() && !isTesting() && !isProduction())
    throw new Error(
      `NODE_ENV must be ${ENV_DEVELOPMENT} || ${ENV_TESTING} || ${ENV_PRODUCTION}`
    );

  /**
   * Authorization and authentication
   * requires access and refresh tokens
   */
  if (!process.env.REFRESH_TOKEN_SECRET || !process.env.REFRESH_TOKEN_EXP)
    throw new Error(`Refresh tokens need to be set up`);

  if (!process.env.ACCESS_TOKEN_SECRET || !process.env.ACCESS_TOKEN_EXP)
    throw new Error(`Access tokens need to be set up`);

  if (!process.env.APPLICATION_NAME) throw new Error(`Application must be set up`);

  /**
   * Only run database migrations on production
   * as this might destroy existing data
   *
   * If database is currently in production
   * this needs to be manually set up
   */
  if (!isProduction) await connection.runMigrations();

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
            if (complexity > MAX_QUERY_COST) {
              throw new MaxComplexityError(complexity, MAX_QUERY_COST);
            }
          }
        })
      }
    ]
  });

  /**
   * Start up the server and setup middlewares
   */
  const app = express();
  app.use(cookieParser());
  app.use(cors({ credentials: true, origin: process.env.ORIGIN }));
  app.use((req, res, next) => authenticateToken(req, res, next));

  server.applyMiddleware({ app });

  app.listen(process.env.PORT || 5000, () => {
    Log.info(
      `Server ready at http://localhost:${process.env.PORT}${server.graphqlPath} env: ${process.env.NODE_ENV}`
    );
  });
}

main().catch(e => Log.fatal(e));
