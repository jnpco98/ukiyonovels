import { Middleware } from 'type-graphql/dist/interfaces/Middleware';

/**
 * Creates a middleware for each base resolver action
 */
export interface ResolverMiddleware {
  get?: Middleware<any>[];
  paginate?: Middleware<any>[];
  create?: Middleware<any>[];
  update?: Middleware<any>[];
  delete?: Middleware<any>[];
}
