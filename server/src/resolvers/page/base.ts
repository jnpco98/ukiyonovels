import { InputType, Field, Resolver, Query, Arg } from 'type-graphql';
import { createBaseResolver } from '../base/base-resolver';
import ROLES from '../../constants/roles';
import { StringWhere } from '../../lib/query/where-type';
import { ContextHooks } from '../base/types/context-hooks';
import { BaseResolverParams } from '../base/types/resolver';
import { Page } from '../../entity/page';

/**
 * Filters for querying resource
 */
@InputType()
export class PageQueryableInput {
  @Field((type) => StringWhere, { nullable: true })
  title: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  content?: typeof StringWhere;
}

/**
 * Authorization required
 * to call a page action
 */
const authorization = {
  get: [ROLES.anonymous],
  paginate: [ROLES.anonymous],
  create: [ROLES.member],
  update: [ROLES.member],
  delete: [ROLES.member]
};

const contextHooks: ContextHooks<Page> = {};

const resolverConfig: BaseResolverParams<Page, Page> = {
  EntityType: Page,
  QueryableInputType: PageQueryableInput,
  MutationInputType: Page,
  authorization,
  contextHooks,
  resource: 'page'
};

/**
 * Creates the base page resolver classes
 */
const {
  BaseGetResolver,
  BaseSearchResolver,
  BaseCreateResolver,
  BaseUpdateResolver,
  BaseDeleteResolver
} = createBaseResolver(resolverConfig);

/**
 * Page Create Resolver
 */
@Resolver()
export class PageCreateResolver extends BaseCreateResolver {}

/**
 * Page Delete Resolver
 *
 * Archives/Mark for deletion the selected resource
 */
@Resolver()
export class PageDeleteResolver extends BaseDeleteResolver {}

/**
 * Page Get Resolver
 *
 * Gets a single resource using the resource id
 */
@Resolver()
export class PageGetResolver extends BaseGetResolver {
  @Query((returns) => Page, { name: `pageBySlug`, nullable: true })
  async getPageBySlug(@Arg('slug') slug?: string) {
    return await Page.findOne({ where: { slug, archived: false } });
  }
}

/**
 * Page Search Resolver
 *
 * Looks for a single resource using the resource id
 */
@Resolver()
export class PageSearchResolver extends BaseSearchResolver {}

/**
 * Page Update Resolver
 *
 * Updates a single resource using the
 * resource id and the required input parameters
 */
@Resolver()
export class PageUpdateResolver extends BaseUpdateResolver {}
