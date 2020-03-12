import path from 'path';
import { buildSchema } from 'type-graphql';

import { authChecker } from '../utilities/auth/auth-checker';
import { GraphQLSchema } from 'graphql';

let schema: GraphQLSchema;

export async function createSchema() {
  if (!schema) {
    schema = await buildSchema({
      resolvers: [
        path.resolve(
          __dirname,
          '..',
          `resolvers/**/!(*.test|*.spec).${
            process.env.NODE_ENV === 'production' ? 'js' : 'ts'
          }`
        )
      ],
      authChecker,
      authMode: 'null'
    });
  }
  return schema;
}
