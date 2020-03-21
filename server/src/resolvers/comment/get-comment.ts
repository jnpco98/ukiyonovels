import { Resolver } from 'type-graphql';
import { BaseCommentGetResolver } from './comment-base';

/**
 * Comment Get Resolver
 * 
 * Gets a single resource using the resource id
 */
@Resolver()
export class CommentGetResolver extends BaseCommentGetResolver {}
