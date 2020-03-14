import path from 'path';
import { buildSchema } from 'type-graphql';

import { authChecker } from '../utilities/auth/auth-checker';
import { GraphQLSchema } from 'graphql';
import { isProduction } from '../utilities/env/node-env';

let schema: GraphQLSchema;

/**
 * Singleton schema pattern
 */
export async function createSchema() {
  if (!schema) {
    /**
     * If schema doesn't exist,
     * generate it from the resolvers directory
     */
    schema = await buildSchema({
      resolvers: [
        path.resolve(
          __dirname,
          '..',
          `resolvers/**/!(*.test|*.spec).${isProduction() ? 'js' : 'ts'}`
        )
      ],
      /**
       * Handles authorization and authentication and shows
       * auth errors to the client
       */
      authChecker,
      authMode: 'null'
    });
  }
  return schema;
}
