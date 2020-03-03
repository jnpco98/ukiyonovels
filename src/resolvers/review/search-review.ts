import { Resolver, FieldResolver, Root } from 'type-graphql';
import { BaseReviewSearchResolver } from './review-base';
import { Novel } from '../../entity/novel';
import { Review } from '../../entity/review';
import { getRepository } from 'typeorm';

@Resolver(of => Review)
export class ReviewSearchResolver extends BaseReviewSearchResolver {
  @FieldResolver(returns => Novel)
  async novel(@Root() review: Review) {
    return await getRepository(Novel).findOne({
      id: review.novelId,
      archived: false
    });
  }
}
