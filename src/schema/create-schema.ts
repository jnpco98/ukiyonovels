import path from 'path';
import { buildSchema } from 'type-graphql';

import { authChecker } from '../utilities/auth/auth-checker';

export async function createSchema() {
  return await buildSchema({ 
    resolvers: [path.resolve(__dirname, '..', 'resolvers/**/*.ts')], 
    authChecker
  });
}