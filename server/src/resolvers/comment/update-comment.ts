import { Resolver } from 'type-graphql';
import { BaseCommentUpdateResolver } from './comment-base';

/**
 * Comment Update Resolver
 * 
 * Updates a single resource using the 
 * resource id and the required input parameters
 */
@Resolver()
export class CommentUpdateResolver extends BaseCommentUpdateResolver {}
