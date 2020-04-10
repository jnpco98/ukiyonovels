import { createBaseResolver } from '../base/base-resolver';
import { Chapter } from '../../entity/chapter';
import ROLES from '../../constants/roles';
import { InputType, Field } from 'type-graphql';
import { StringWhere } from '../../lib/query/where-type';
import { ContextHooks } from '../base/types/context-hooks';
import { BaseResolverParams } from '../base/types/resolver';

/**
 * Required parameters to
 * create the chapter resource
 */
@InputType()
export class ChapterQueryableInput {
  @Field(type => StringWhere, { nullable: true })
  title?: typeof StringWhere;
}

/**
 * Authorization required
 * to call a chapter action
 */
const authorization = {
  get: [ROLES.anonymous],
  paginate: [ROLES.anonymous],
  create: [ROLES.owner],
  update: [ROLES.owner],
  delete: [ROLES.owner]
};

const contextHooks: ContextHooks<Chapter> = {};

const resolverConfig: BaseResolverParams<Chapter, Chapter> = {
  EntityType: Chapter,
  QueryableInputType: ChapterQueryableInput,
  MutationInputType: Chapter,
  authorization,
  contextHooks,
  resource: 'chapter'
};

/**
 * Creates the base chapter resolver classes
 */
const {
  ConnectionType,
  WhereInputType,
  BaseGetResolver,
  BaseSearchResolver,
  BaseCreateResolver,
  BaseUpdateResolver,
  BaseDeleteResolver
} = createBaseResolver(resolverConfig);

export {
  ConnectionType as ChapterConnectionType,
  WhereInputType as ChapterWhereInputType,
  BaseGetResolver as BaseChapterGetResolver,
  BaseSearchResolver as BaseChapterSearchResolver,
  BaseCreateResolver as BaseChapterCreateResolver,
  BaseUpdateResolver as BaseChapterUpdateResolver,
  BaseDeleteResolver as BaseChapterDeleteResolver
};
