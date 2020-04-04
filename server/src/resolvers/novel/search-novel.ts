import { Resolver, FieldResolver, Root, Args, Arg, Float } from 'type-graphql';
import { Novel } from '../../entity/novel';
import { ConnectionArgs } from '../../lib/relay/connection-args';

import { BaseNovelSearchResolver } from './novel-base';
import { createCursorConnection } from '../../lib/relay/create-cursor-connection';
import { getAndUpdateNovelRating } from './update-novel';
import { ChapterConnectionType, ChapterWhereInputType } from '../chapter/chapter-base';
import { BookConnectionType, BookWhereInputType } from '../book/book-base';
import { ReviewConnectionType, ReviewWhereInputType } from '../review/review-base';
import { WhereAndOrParams } from '../../lib/query/types/where-and-or';
import { getRepository } from 'typeorm';
import { Chapter } from '../../entity/chapter';
import { Book } from '../../entity/book';
import { Review } from '../../entity/review';
import { GraphQLObjectType } from 'graphql';

@Resolver(of => Novel)
export class NovelSearchResolver extends BaseNovelSearchResolver {
  /**
   * Returns a chapter relay connection
   * for the novel entity
   */
  @FieldResolver(returns => ChapterConnectionType.Connection, {
    complexity: ({ childComplexity, args }) => args['first'] * childComplexity
  })
  async chapters(
    @Root() novel: Novel,
    @Args() connArgs: ConnectionArgs,
    @Arg(`where`, () => ChapterWhereInputType || GraphQLObjectType, { nullable: true })
    query?: WhereAndOrParams
  ): Promise<any> {
    const queryBuilder = getRepository(Chapter).createQueryBuilder();
    queryBuilder.andWhere('novel_id = :isvalue', { isvalue: novel.id });
    return await createCursorConnection(
      {
        queryBuilder,
        connArgs,
        query
      },
      Chapter
    );
  }

  /**
   * Returns a book relay connection
   * for the novel entity
   */
  @FieldResolver(returns => BookConnectionType.Connection, {
    complexity: ({ childComplexity, args }) => (args.first || args.last) * childComplexity
  })
  async books(
    @Root() novel: Novel,
    @Args() connArgs: ConnectionArgs,
    @Arg(`where`, () => BookWhereInputType || GraphQLObjectType, { nullable: true })
    query?: WhereAndOrParams
  ): Promise<any> {
    const queryBuilder = getRepository(Book).createQueryBuilder();
    queryBuilder.andWhere('novel_id = :isvalue', { isvalue: novel.id });
    return await createCursorConnection(
      {
        queryBuilder,
        connArgs,
        query
      },
      Book
    );
  }

  /**
   * Returns a review relay connection
   * for the novel entity
   */
  @FieldResolver(returns => ReviewConnectionType.Connection, {
    complexity: ({ childComplexity, args }) => args['first'] * childComplexity
  })
  async reviews(
    @Root() novel: Novel,
    @Args() connArgs: ConnectionArgs,
    @Arg(`where`, () => ReviewWhereInputType || GraphQLObjectType, { nullable: true })
    query?: WhereAndOrParams
  ): Promise<any> {
    const queryBuilder = getRepository(Review).createQueryBuilder();
    queryBuilder.andWhere('novel_id = :isvalue', { isvalue: novel.id });
    return await createCursorConnection(
      {
        queryBuilder,
        connArgs,
        query
      },
      Review
    );
  }

  /**
   * Gets novel's average rating
   * from the reviews and updates the novel field
   *
   * @param novel Novel root object
   */
  @FieldResolver(returns => Float, { nullable: true })
  async averageRating(@Root() novel: Novel) {
    return await getAndUpdateNovelRating(novel, false);
  }
}
