import { Resolver } from 'type-graphql';
import { BaseReviewGetResolver } from './review-base';

/**
 * Review Get Resolver
 *
 * Gets a single resource using the resource id
 */
@Resolver()
export class ReviewGetResolver extends BaseReviewGetResolver {}
