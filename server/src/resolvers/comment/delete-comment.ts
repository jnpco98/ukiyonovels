import { Resolver } from 'type-graphql';
import { BaseCommentDeleteResolver } from './comment-base';

/**
 * Comment Delete Resolver
 * 
 * Archives/Mark for deletion the selected resource
 */
@Resolver()
export class CommentDeleteResolver extends BaseCommentDeleteResolver {}
