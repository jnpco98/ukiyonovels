import { InputType, Field, Resolver, FieldResolver, Root } from 'type-graphql';
import { getRepository } from 'typeorm';

import { createBaseResolver } from '../base/base-resolver';
import { Comment } from '../../entity/comment';
import ROLES from '../../constants/roles';
import { StringWhere } from '../../lib/query/where-type';
import { ContextHooks } from '../base/types/context-hooks';
import { BaseResolverParams } from '../base/types/resolver';
import { Chapter } from '../../entity/chapter';

/**
 * Filters for querying resource
 */
@InputType()
export class CommentQueryableInput {
  @Field((type) => StringWhere, { nullable: true })
  content?: typeof StringWhere;
}

/**
 * Authorization required
 * to call a comment action
 */
const authorization = {
  get: [ROLES.anonymous],
  paginate: [ROLES.anonymous],
  create: [ROLES.owner],
  update: [ROLES.owner],
  delete: [ROLES.owner]
};

const contextHooks: ContextHooks<Comment> = {};

const resolverConfig: BaseResolverParams<Comment, Comment> = {
  EntityType: Comment,
  QueryableInputType: CommentQueryableInput,
  MutationInputType: Comment,
  authorization,
  contextHooks,
  resource: 'comment'
};

/**
 * Creates the base comment resolver classes
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

export { ConnectionType as CommentConnectionType, WhereInputType as CommentWhereInputType };

/**
 * Comment Create Resolver
 */
@Resolver()
export class CommentCreateResolver extends BaseCreateResolver {}

/**
 * Comment Delete Resolver
 *
 * Archives/Mark for deletion the selected resource
 */
@Resolver()
export class CommentDeleteResolver extends BaseDeleteResolver {}

/**
 * Comment Get Resolver
 *
 * Gets a single resource using the resource id
 */
@Resolver()
export class CommentGetResolver extends BaseGetResolver {}

/**
 * Comment Search Resolver
 */
@Resolver((of) => Comment)
export class CommentSearchResolver extends BaseSearchResolver {
  /**
   * Gets the novel associated
   * with the comment entity
   *
   * @param comment Comment root object
   */
  @FieldResolver((returns) => Chapter)
  async novel(@Root() comment: Comment) {
    return await getRepository(Chapter).findOne({
      id: comment.chapterId,
      archived: false
    });
  }
}

/**
 * Comment Update Resolver
 *
 * Updates a single resource using the
 * resource id and the required input parameters
 */
@Resolver()
export class CommentUpdateResolver extends BaseUpdateResolver {}
