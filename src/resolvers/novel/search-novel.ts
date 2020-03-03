import { Resolver, FieldResolver, Root, Args, Arg } from 'type-graphql';
import { Novel } from '../../entity/novel';
import { ConnectionArgs } from '../../lib/cursors/connection-args';

import { BaseNovelSearchResolver } from './novel-base';
import { createCursorConnection } from '../../lib/relay/create-cursor-connection';
import {
  ChapterConnectionType,
  ChapterWhereInputType
} from '../chapter/chapter-base';
import { BookConnectionType, BookWhereInputType } from '../book/book-base';
import {
  ReviewConnectionType,
  ReviewWhereInputType
} from '../review/review-base';
import { WhereAndOrParams } from '../../lib/query/types/where-and-or';
import { getRepository } from 'typeorm';
import { Chapter } from '../../entity/chapter';
import { Book } from '../../entity/book';
import { Review } from '../../entity/review';

@Resolver(of => Novel)
export class NovelSearchResolver extends BaseNovelSearchResolver {
  @FieldResolver(returns => ChapterConnectionType.Connection)
  async chapters(
    @Root() novel: Novel,
    @Args() connArgs: ConnectionArgs,
    @Arg(`where`, () => ChapterWhereInputType, { nullable: true })
    query?: WhereAndOrParams
  ): Promise<any> {
    const queryBuilder = getRepository(Chapter).createQueryBuilder();
    queryBuilder.andWhere('novel_id = :isvalue', { isvalue: novel.id });
    return await createCursorConnection({
      queryBuilder,
      connArgs,
      query
    });
  }

  @FieldResolver(returns => BookConnectionType.Connection)
  async books(
    @Root() novel: Novel,
    @Args() connArgs: ConnectionArgs,
    @Arg(`where`, () => BookWhereInputType, { nullable: true })
    query?: WhereAndOrParams
  ): Promise<any> {
    const queryBuilder = getRepository(Book).createQueryBuilder();
    queryBuilder.andWhere('novel_id = :isvalue', { isvalue: novel.id });
    return await createCursorConnection({
      queryBuilder,
      connArgs,
      query
    });
  }

  @FieldResolver(returns => ReviewConnectionType.Connection)
  async reviews(
    @Root() novel: Novel,
    @Args() connArgs: ConnectionArgs,
    @Arg(`where`, () => ReviewWhereInputType, { nullable: true })
    query?: WhereAndOrParams
  ): Promise<any> {
    const queryBuilder = getRepository(Review).createQueryBuilder();
    queryBuilder.andWhere('novel_id = :isvalue', { isvalue: novel.id });
    return await createCursorConnection({
      queryBuilder,
      connArgs,
      query
    });
  }
}
