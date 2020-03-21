import { Resolver, FieldResolver, Root, Args, Arg } from 'type-graphql';
import {
  BaseChapterSearchResolver,
  ChapterConnectionType,
  ChapterWhereInputType
} from './chapter-base';
import { Chapter } from '../../entity/chapter';
import { Novel } from '../../entity/novel';
import { getRepository } from 'typeorm';
import { Book } from '../../entity/book';
import { Comment } from '../../entity/comment';
import { ConnectionArgs } from '../../lib/relay/connection-args';
import { WhereAndOrParams } from '../../lib/query/types/where-and-or';
import { createCursorConnection } from '../../lib/relay/create-cursor-connection';
import { GraphQLObjectType } from 'graphql';

@Resolver(of => Chapter)
export class ChapterSearchResolver extends BaseChapterSearchResolver {
  /**
   * Gets the novel associated
   * with the chapter entity
   *
   * @param chapter Chapter root object
   */
  @FieldResolver(returns => Novel)
  async novel(@Root() chapter: Chapter) {
    return await getRepository(Novel).findOne({
      id: chapter.novelId,
      archived: false
    });
  }

  /**
   * Gets the book associated
   * with the chapter entity
   *
   * @param chapter Chapter root object
   */
  @FieldResolver(returns => Book)
  async book(@Root() chapter: Chapter) {
    return await getRepository(Book).findOne({
      id: chapter.bookId,
      archived: false
    });
  }

  /**
   * Returns a comment relay connection
   * for the chapter entity
   */
  @FieldResolver(returns => ChapterConnectionType.Connection, {
    complexity: ({ childComplexity, args }) => (args.first || args.last) * childComplexity
  })
  async comments(
    @Root() chapter: Chapter,
    @Args() connArgs: ConnectionArgs,
    @Arg(`where`, () => ChapterWhereInputType || GraphQLObjectType, { nullable: true })
    query?: WhereAndOrParams
  ): Promise<any> {
    const queryBuilder = getRepository(Comment).createQueryBuilder();
    queryBuilder.andWhere('chapter_id = :isvalue', { isvalue: chapter.id });
    return await createCursorConnection(
      {
        queryBuilder,
        connArgs,
        query
      },
      Comment
    );
  }
}
