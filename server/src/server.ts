import 'reflect-metadata';

import express from 'express';
import { ApolloError, ApolloServer } from 'apollo-server-express';
import { GraphQLError, separateOperations } from 'graphql';
import { ArgumentValidationError } from 'type-graphql';
import { fieldConfigEstimator, getComplexity, simpleEstimator } from 'graphql-query-complexity';
import cookieParser from 'cookie-parser';
import { verify } from 'jsonwebtoken';
import cors from 'cors';

import {
  ENV_DEVELOPMENT,
  ENV_PRODUCTION,
  ENV_TESTING,
  isDevelopment,
  isProduction,
  isTesting
} from './utilities/env/node-env';

import Log from './utilities/log/logger';
import { MaxComplexityError } from './lib/relay/errors/complexity';
import { authenticateToken } from './middleware/authentication/authenticate-token';
import { createSchema } from './schema/create-schema';
import { initializeConnection } from './utilities/connection/initialize-connection';
import { logInternalError } from './utilities/log/log-internal-error';
import ROLES from './constants/roles';

/**
 * Handles and transforms the errors
 *
 * Filters out errors that should
 * and shouldn't be shown to the user
 * @param error
 */
function formatGraphqlError(error: GraphQLError) {
  if (!isProduction()) return error;

  const genericError = new GraphQLError(`Internal Server Error: ${logInternalError(error)}`);

  if(error.message.includes('Database Error:')) 
    return genericError;
  if (error instanceof ApolloError || error.originalError instanceof ApolloError) 
    return error;
  if (error instanceof ArgumentValidationError || error.originalError instanceof ArgumentValidationError) {
    if (error.extensions) error.extensions.code = 'GRAPHQL_VALIDATION_FAILED';
    return error;
  }

  return genericError;
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
    throw new Error(`NODE_ENV must be ${ENV_DEVELOPMENT} || ${ENV_TESTING} || ${ENV_PRODUCTION}`);

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
  if (!isProduction()) await connection.runMigrations();

  const MAX_QUERY_COST = parseInt(process.env.MAX_QUERY_COST || '1000');

  const schema = await createSchema();
  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
    formatError: formatGraphqlError,
    introspection: !isProduction() || process.env.ENABLE_PLAYGROUND == 'true',
    playground: !isProduction() || process.env.ENABLE_PLAYGROUND == 'true',
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
              estimators: [fieldConfigEstimator(), simpleEstimator({ defaultComplexity: 1 })]
            });

            try {
              let role = ROLES.member;

              if(request.http && request.http.headers && request.http?.headers.get('authorization')) {
                const authorization = request.http?.headers.get('authorization')?.split(' ')[1];
                const authDecoded = verify(authorization || '', process.env.ACCESS_TOKEN_SECRET!);
                if(authDecoded && (authDecoded as any).role) role = (authDecoded as any).role;
              }

              if(complexity > MAX_QUERY_COST && role !== ROLES.owner)
                throw new MaxComplexityError(complexity, MAX_QUERY_COST);

            } catch (e) {
              if(complexity > MAX_QUERY_COST) 
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

main().catch((e) => Log.fatal(e));
