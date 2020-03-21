import { createBaseResolver } from '../base/base-resolver';
import { Novel } from '../../entity/novel';
import { InputType, Field } from 'type-graphql';

import ROLES from '../../constants/roles';
import { StringWhere, NumberWhere } from '../../lib/query/where-type';
import { ContextHooks } from '../base/types/context-hooks';
import { BaseResolverParams } from '../base/types/resolver';

/**
 * Required parameters to 
 * create the novel resource
 */
@InputType()
export class NovelQueryableInput {
  @Field(type => StringWhere, { nullable: true })
  title?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  description?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  type?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  tags?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  genres?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  origins?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  authors?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  artists?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  relatedNovels?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  associatedNames?: typeof StringWhere;

  @Field(type => NumberWhere, { nullable: true })
  likes?: typeof NumberWhere;

  @Field(type => NumberWhere, { nullable: true })
  views?: typeof NumberWhere;
}

/**
 * Authorization required
 * to call a novel action
 */
const authorization = {
  get: [ROLES.anonymous],
  paginate: [ROLES.anonymous],
  create: [ROLES.owner],
  update: [ROLES.owner],
  delete: [ROLES.owner]
};

const contextHooks: ContextHooks<Novel> = {};

const resolverConfig: BaseResolverParams<Novel, NovelQueryableInput, Novel> = {
  EntityType: Novel,
  QueryableInputType: NovelQueryableInput,
  MutationInputType: Novel,
  authorization,
  contextHooks,
  resource: 'novel'
};

/**
 * Creates the novel chapter resolver classes
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
  ConnectionType as NovelConnectionType,
  WhereInputType as NovelWhereInputType,
  BaseGetResolver as BaseNovelGetResolver,
  BaseSearchResolver as BaseNovelSearchResolver,
  BaseCreateResolver as BaseNovelCreateResolver,
  BaseUpdateResolver as BaseNovelUpdateResolver,
  BaseDeleteResolver as BaseNovelDeleteResolver
};
