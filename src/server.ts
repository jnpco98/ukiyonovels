import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
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
import { separateOperations } from 'graphql';

async function main() {
  const connection = await initializeConnection();
  await connection.runMigrations();

  const MAX_QUERY_COST = process.env.MAX_QUERY_COST || 1000;

  const schema = await createSchema();
  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
    plugins: [
      {
        requestDidStart: () => ({
          didResolveOperation: ({ request, document }) => {
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
              throw new Error(
                `Query has a cost of ${complexity} which exceeds the max cost of ${MAX_QUERY_COST}`
              );
            }
          },
        }),
      }
    ],
    introspection: true,
    playground: true
  });

  const app = express();
  app.use(cookieParser());
  app.use(cors({ credentials: true, origin: process.env.ORIGIN }));
  app.use((req, res, next) => authenticateToken(req, res, next));

  server.applyMiddleware({ app });

  app.listen(process.env.PORT || 5000, () => {
    console.log(
      `Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
    );
  });
}

main();
