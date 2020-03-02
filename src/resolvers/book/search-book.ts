import { Resolver, FieldResolver, Root, Args, Arg } from "type-graphql";
import { BaseBookSearchResolver } from "./book-base";
import { ChapterConnectionType, ChapterWhereInputType } from "../chapter/chapter-base";
import { Book } from "../../entity/book";
import { ConnectionArgs } from "../../lib/cursors/connection-args";
import { WhereAndOrParams } from "../../lib/query/types/where-and-or";
import { getRepository } from "typeorm";
import { Chapter } from "../../entity/chapter";
import { createCursorConnection } from "../../lib/relay/create-cursor-connection";
import { Novel } from "../../entity/novel";

@Resolver(of => Book)
export class BookSearchResolver extends BaseBookSearchResolver {
  @FieldResolver(returns => Novel)
  async novel(@Root() book: Book) {
    return await getRepository(Novel).findOne({ 
      id: book.novelId, archived: false
    });
  }

  @FieldResolver(returns => ChapterConnectionType.Connection)
  async chapters(
    @Root() book: Book,
    @Args() connArgs: ConnectionArgs,
    @Arg(
      `where`, 
      () => ChapterWhereInputType, { nullable: true }
    ) query?: WhereAndOrParams
  ): Promise<any> {
    const queryBuilder = getRepository(Chapter).createQueryBuilder();
    queryBuilder.andWhere('book_id = :isvalue', { isvalue: book.id })
    return await createCursorConnection({
      queryBuilder, connArgs, query
    });
  }
}