import { createBaseResolver } from '../base/base-resolver';
import { Article } from '../../entity/article';
import ROLES from '../../constants/roles';
import { InputType, Field } from 'type-graphql';
import { StringWhere, NumberWhere } from '../../lib/query/where-type';
import { ContextHooks } from '../base/types/context-hooks';
import { BaseResolverParams } from '../base/types/resolver';

/**
 * Filters for querying resource
 */
@InputType()
export class ArticleQueryableInput {
  @Field(type => StringWhere, { nullable: true })
  title?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  content?: typeof StringWhere;
}

/**
 * Authorization required
 * to call a article action
 */
const authorization = {
  get: [ROLES.anonymous],
  paginate: [ROLES.anonymous],
  create: [ROLES.owner],
  update: [ROLES.owner],
  delete: [ROLES.owner]
};

const contextHooks: ContextHooks<Article> = {};

const resolverConfig: BaseResolverParams<Article, Article> = {
  EntityType: Article,
  QueryableInputType: ArticleQueryableInput,
  MutationInputType: Article,
  authorization,
  contextHooks,
  resource: 'article'
};

/**
 * Creates the base article resolver classes
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
  ConnectionType as ArticleConnectionType,
  WhereInputType as ArticleWhereInputType,
  BaseGetResolver as BaseArticleGetResolver,
  BaseSearchResolver as BaseArticleSearchResolver,
  BaseCreateResolver as BaseArticleCreateResolver,
  BaseUpdateResolver as BaseArticleUpdateResolver,
  BaseDeleteResolver as BaseArticleDeleteResolver
};
