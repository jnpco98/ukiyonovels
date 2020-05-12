import { createBaseResolver } from '../base/base-resolver';
import { Article } from '../../entity/article';
import ROLES from '../../constants/roles';
import { InputType, Field, Resolver, Query, Arg } from 'type-graphql';
import { StringWhere } from '../../lib/query/where-type';
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
  WhereInputType as ArticleWhereInputType
};

/**
 * Article Create Resolver
 */
@Resolver()
export class ArticleCreateResolver extends BaseCreateResolver {}

/**
 * Article Delete Resolver
 */
@Resolver()
export class ArticleDeleteResolver extends BaseDeleteResolver {}

/**
 * Article Get Resolver
 */
@Resolver()
export class ArticleGetResolver extends BaseGetResolver {
  /**
   * Gets a single resource using the resource id or slug
   */
  @Query(returns => Article, { name: `articleBySlug`, nullable: true })
  async getNovelBySlug(
    @Arg('slug') slug?: string
  ) {
    return await Article.findOne({ where: { slug, archived: false } });
  }
}

/**
 * Article Search Resolver
 */
@Resolver()
export class ArticleSearchResolver extends BaseSearchResolver {}

/**
 * Article Update Resolver
 */
@Resolver()
export class ArticleUpdateResolver extends BaseUpdateResolver {}