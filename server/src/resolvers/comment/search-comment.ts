import { Resolver, FieldResolver, Root } from 'type-graphql';
import { BaseCommentSearchResolver } from './comment-base';
import { Chapter } from '../../entity/chapter';
import { Comment } from '../../entity/comment';
import { getRepository } from 'typeorm';

@Resolver(of => Comment)
export class CommentSearchResolver extends BaseCommentSearchResolver {
  /**
   * Gets the novel associated
   * with the comment entity
   * 
   * @param comment Comment root object
   */
  @FieldResolver(returns => Chapter)
  async novel(@Root() comment: Comment) {
    return await getRepository(Chapter).findOne({
      id: comment.chapterId,
      archived: false
    });
  }
}
