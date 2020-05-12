import { ClassType } from 'type-graphql';

import { AuthorizationRequirements } from './authorization';
import { ContextHooks } from './context-hooks';
import { ResolverMiddleware } from './middleware';
import { NumberWhere, StringWhere } from '../../../lib/query/where-type';

export type EntityQueryable<T> = {
  [P in keyof T]?: typeof StringWhere | typeof NumberWhere;
};

/**
 * Base Resolver Params
 */
export interface BaseResolverParams<T, U> {
  EntityType: ClassType<T>;
  QueryableInputType?: ClassType<EntityQueryable<T>>;
  MutationInputType: ClassType<U>;

  resource: string;
  authorization?: AuthorizationRequirements;
  resolverMiddleware?: ResolverMiddleware;
  contextHooks?: ContextHooks<T>;
}
