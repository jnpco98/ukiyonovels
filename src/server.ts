import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { authenticateToken } from './middleware/authenticate-token';
import { createSchema } from './schema/create-schema';
import { initializeConnection } from './utilities/connection/initialize-connection';

async function main() {
  const connection = await initializeConnection();
  await connection.runMigrations();

  const schema = await createSchema();
  const server = new ApolloServer({
    schema, context: ({ req, res }) => ({ req, res })
  });

  const app = express();
  app.use(cookieParser())
  app.use(cors({ credentials: true, origin: process.env.ORIGIN }));
  app.use((req, res, next) => authenticateToken(req, res, next));
  
  server.applyMiddleware({ app });

  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
  });
}

main();