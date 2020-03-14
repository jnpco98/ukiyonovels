import { Middleware } from 'type-graphql/dist/interfaces/Middleware';

export interface ResolverMiddleware {
  get?: Middleware<any>[];
  paginate?: Middleware<any>[];
  create?: Middleware<any>[];
  update?: Middleware<any>[];
  delete?: Middleware<any>[];
}
