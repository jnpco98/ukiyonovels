import { Resolver } from 'type-graphql';
import { BaseReviewDeleteResolver } from './review-base';

/**
 * Review Delete Resolver
 *
 * Archives/Mark for deletion the selected resource
 */
@Resolver()
export class ReviewDeleteResolver extends BaseReviewDeleteResolver {}
