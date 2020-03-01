import { Resolver, FieldResolver, Root, Args, Arg } from "type-graphql";
import { BaseSearchResolver } from "./novel-base";
import { Novel } from "../../entity/novel";
import { Chapter } from "../../entity/chapter";
import { ConnectionArgs } from "../../lib/cursors/connection-args";
import { WhereAndOrParams } from "../../lib/query/types/where-and-or";
import { createWhereInputType } from "../../lib/query/create-input-type";
import { getRepository, ConnectionOptions, Connection } from "typeorm";
import { connectionFromArraySlice } from "graphql-relay";
import { createConnectionDefinition } from "../../lib/cursors/create-connection-definition";

const ConnectionType = createConnectionDefinition('_chapter', Chapter);

@Resolver(of => Novel)
export class NovelSearchResolver extends BaseSearchResolver {
  @FieldResolver(returns => ConnectionType.Connection)
  async chapters(
    @Root() novel: Novel,
    @Args() connArgs: ConnectionArgs
  ): Promise<any> {
    const { sortKey, reverse, pagination } = connArgs;
    const { limit, offset } = pagination;

    const queryBuilder = getRepository(Chapter).createQueryBuilder('c').where('c.novel_id = :novel_id', { novel_id: novel.id });

    const sort = sortKey && sortKey.trim() ? sortKey : 'created_at';
    const order = reverse ? 'DESC' : 'ASC';

    const [entities, count] = await queryBuilder
      .skip(offset).take(limit).orderBy(sort, order).getManyAndCount();

    
    const result = connectionFromArraySlice(
      entities, connArgs, {
        arrayLength: count, sliceStart: offset || 0
      }
    );

    return result;
  }
}