import { Resolver } from 'type-graphql';
import { BaseReviewUpdateResolver } from './review-base';

/**
 * Review Update Resolver
 *
 * Updates a single resource using the
 * resource id and the required input parameters
 */
@Resolver()
export class ReviewUpdateResolver extends BaseReviewUpdateResolver {}
