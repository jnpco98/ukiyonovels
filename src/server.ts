import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { CreateTokenResolver } from './resolvers/authentication/create-token';
import { CreateUserResolver } from './resolvers/user/create-user';
import { authenticateToken } from './middleware/authenticate-token';
import { RefreshTokenResolver } from './resolvers/authentication/refresh-token';
import { ProfileResolver } from './resolvers/user/profile';
import { authChecker } from './utilities/auth/auth-checker';

async function main() {
  const configuration = await getConnectionOptions(process.env.NODE_ENV);
  const connection = await createConnection({ ...configuration, name: 'default' });
  await connection.runMigrations();

  const schema = await buildSchema({ 
    resolvers: [ CreateTokenResolver, RefreshTokenResolver, CreateUserResolver, ProfileResolver ], authChecker
  });
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