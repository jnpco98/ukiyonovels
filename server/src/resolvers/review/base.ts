import { InputType, Field, FieldResolver, Resolver, Root, ID } from 'type-graphql';
import { getRepository } from 'typeorm';

import { createBaseResolver } from '../base/base-resolver';
import { Review } from '../../entity/review';
import ROLES from '../../constants/roles';
import { StringWhere, NumberWhere } from '../../lib/query/where-type';
import { ContextHooks } from '../base/types/context-hooks';
import { BaseResolverParams } from '../base/types/resolver';
import { Novel } from '../../entity/novel';
import { Context } from '../../lib/resolver/context';
import { getAndUpdateNovelRating } from '../novel/base';

/**
 * Filters for querying resource
 */
@InputType()
export class ReviewQueryableInput {
  @Field((type) => StringWhere, { nullable: true })
  content?: typeof StringWhere;

  @Field((type) => NumberWhere, { nullable: true })
  rating: typeof NumberWhere;
}

/**
 * Authorization required
 * to call a review action
 */
const authorization = {
  get: [ROLES.anonymous],
  paginate: [ROLES.anonymous],
  create: [ROLES.member],
  update: [ROLES.member],
  delete: [ROLES.member]
};

async function updateNovelRatingOnReviewCreate(
  entity: Review,
  ctx: Context | undefined,
  data: any
) {
  const novel = await Novel.findOne({ where: { archived: false, id: data.novelId } });
  if (!novel) return null;

  entity.novelId = novel.id;
  const review = await entity.save();
  if (entity.rating) await getAndUpdateNovelRating(novel);

  return review;
}

async function updateNovelRatingOnReviewModify(
  entity: Review,
  ctx: Context | undefined,
  data: any
) {
  const novel = await Novel.findOne({ where: { archived: false, id: entity.novelId } });
  if (!novel) return null;

  const review = await entity.save();
  if (entity.rating) await getAndUpdateNovelRating(novel);

  return review;
}

const contextHooks: ContextHooks<Review> = {
  create: async (entity, ctx, data) => await updateNovelRatingOnReviewCreate(entity, ctx, data),
  update: async (entity, ctx, data) => await updateNovelRatingOnReviewModify(entity, ctx, data),
  delete: async (entity, ctx, data) => await updateNovelRatingOnReviewModify(entity, ctx, data)
};

const resolverConfig: BaseResolverParams<Review, Review> = {
  EntityType: Review,
  QueryableInputType: ReviewQueryableInput,
  MutationInputType: Review,
  authorization,
  contextHooks,
  resource: 'review'
};

/**
 * Creates the base review resolver classes
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

export { ConnectionType as ReviewConnectionType, WhereInputType as ReviewWhereInputType };

/**
 * Review Create Resolver
 */
@Resolver()
export class ReviewCreateResolver extends BaseCreateResolver {}

/**
 * Review Delete Resolver
 *
 * Archives/Mark for deletion the selected resource
 */
@Resolver()
export class ReviewDeleteResolver extends BaseDeleteResolver {}

/**
 * Review Get Resolver
 *
 * Gets a single resource using the resource id
 */
@Resolver()
export class ReviewGetResolver extends BaseGetResolver {}

@Resolver((of) => Review)
export class ReviewSearchResolver extends BaseSearchResolver {
  /**
   * Gets the novel associated
   * with the review entity
   *
   * @param review Review root object
   */
  @FieldResolver((returns) => Novel, { nullable: true })
  async novel(@Root() review: Review) {
    return await getRepository(Novel).findOne({
      id: review.novelId,
      archived: false
    });
  }

  /**
   * Gets the user associated
   * with the review entity
   *
   * @param review Review root object
   */
  @FieldResolver((returns) => ID, { nullable: true })
  async user(@Root() review: Review) {
    return review.creatorId;
  }
}

/**
 * Review Update Resolver
 *
 * Updates a single resource using the
 * resource id and the required input parameters
 */
@Resolver()
export class ReviewUpdateResolver extends BaseUpdateResolver {}
