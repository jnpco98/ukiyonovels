import { InputType, Field } from 'type-graphql';
import { createBaseResolver } from '../base/base-resolver';
import { Review } from '../../entity/review';
import ROLES from '../../constants/roles';
import { StringWhere, NumberWhere } from '../../lib/query/where-type';
import { ContextHooks } from '../base/types/context-hooks';
import { BaseResolverParams } from '../base/types/resolver';
import { Novel } from '../../entity/novel';
import { getAndUpdateNovelRating } from '../novel/update-novel';
import { Context } from '../../lib/resolver/context';

/**
 * Required parameters to
 * create the review resource
 */
@InputType()
export class ReviewQueryableInput {
  @Field(type => StringWhere, { nullable: true })
  content?: string;

  @Field(type => NumberWhere, { nullable: true })
  rating: number;
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

async function updateNovelRatingOnReviewCreate(entity: Review, ctx: Context | undefined, data: any) {
  const novel = await Novel.findOne({ where: { archived: false, id: data.novelId } });
  if(!novel) return null;

  entity.novelId = novel.id;
  const review = await entity.save();
  if(entity.rating) await getAndUpdateNovelRating(novel);

  return review;
}

async function updateNovelRatingOnReviewModify(entity: Review, ctx: Context | undefined, data: any) {
  const novel = await Novel.findOne({ where: { archived: false, id: entity.novelId } });
  if(!novel) return null;
  
  const review = await entity.save();
  if(entity.rating) await getAndUpdateNovelRating(novel);

  return review;
}

const contextHooks: ContextHooks<Review> = {
  create: async (entity, ctx, data) => await updateNovelRatingOnReviewCreate(entity, ctx, data),
  update: async (entity, ctx, data) => await updateNovelRatingOnReviewModify(entity, ctx, data),
  delete: async (entity, ctx, data) => await updateNovelRatingOnReviewModify(entity, ctx, data)
};

const resolverConfig: BaseResolverParams<Review, ReviewQueryableInput, Review> = {
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

export {
  ConnectionType as ReviewConnectionType,
  WhereInputType as ReviewWhereInputType,
  BaseGetResolver as BaseReviewGetResolver,
  BaseSearchResolver as BaseReviewSearchResolver,
  BaseCreateResolver as BaseReviewCreateResolver,
  BaseUpdateResolver as BaseReviewUpdateResolver,
  BaseDeleteResolver as BaseReviewDeleteResolver
};
