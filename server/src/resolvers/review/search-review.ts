import { Resolver, FieldResolver, Root, ID } from 'type-graphql';
import { BaseReviewSearchResolver } from './review-base';
import { Novel } from '../../entity/novel';
import { Review } from '../../entity/review';
import { getRepository } from 'typeorm';

@Resolver(of => Review)
export class ReviewSearchResolver extends BaseReviewSearchResolver {
  /**
   * Gets the novel associated
   * with the review entity
   *
   * @param review Review root object
   */
  @FieldResolver(returns => Novel, { nullable: true })
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
  @FieldResolver(returns => ID, { nullable: true })
  async user(@Root() review: Review) {
    return review.creatorId;
  }
}
