import { ClassType } from 'type-graphql';
import { AuthorizationRequirements } from './authorization';
import { ResolverMiddleware } from './middleware';
import { ContextHooks } from './context-hooks';

/**
 * Base Resolver Params
 */
export interface BaseResolverParams<T, V, U> {
  EntityType: ClassType<T>;
  QueryableInputType?: ClassType<V>;
  MutationInputType: ClassType<U>;

  resource: string;
  authorization?: AuthorizationRequirements;
  resolverMiddleware?: ResolverMiddleware;
  contextHooks?: ContextHooks<T>;
}