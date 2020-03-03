import { BaseEntity } from '../../../entity/entity';
import { DeepPartial } from 'typeorm';
import { ClassType } from 'type-graphql';
import { AuthorizationRequirements } from './authorization';
import { ResolverMiddleware } from './middleware';
import { ContextHooks } from './context-hooks';

export interface BaseResolverParams<
  T extends BaseEntity,
  V,
  U extends DeepPartial<T>
> {
  EntityType: ClassType<T>;
  QueryableInputType: ClassType<V>;
  MutationInputType: ClassType<U>;

  resource: string;
  authorization?: AuthorizationRequirements;
  resolverMiddleware?: ResolverMiddleware;
  contextHooks?: ContextHooks<T>;
}
