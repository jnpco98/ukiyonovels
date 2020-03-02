import { Resolver, FieldResolver, Root, Args } from "type-graphql";
import { BaseChapterSearchResolver } from "./chapter-base";
import { Chapter } from "../../entity/chapter";
import { Novel } from "../../entity/novel";
import { ConnectionArgs } from "../../lib/cursors/connection-args";
import { getRepository } from "typeorm";
import { connectionFromArraySlice } from "graphql-relay";

// const ConnectionType = createConnectionDefinition('_novel', Novel);

@Resolver(of => Chapter)
export class ChapterSearchResolver extends BaseChapterSearchResolver {
  @FieldResolver(returns => Novel, { nullable: true })
  async novel (
    @Root() chapter: Chapter,
    @Args() connArgs: ConnectionArgs
  ): Promise<any> {
    // const { sortKey, reverse, pagination } = connArgs;
    // const { limit, offset } = pagination;

    // const queryBuilder = getRepository(Novel).createQueryBuilder('n').where('n.entity_id = :novel_id', { novel_id: chapter.novelId });

    // const sort = sortKey && sortKey.trim() ? sortKey : 'created_at';
    // const order = reverse ? 'DESC' : 'ASC';

    // const [entities, count] = await queryBuilder
    //   .skip(offset).take(limit).orderBy(sort, order).getManyAndCount();

    
    // const result = connectionFromArraySlice(
    //   entities, connArgs, {
    //     arrayLength: count, sliceStart: offset || 0
    //   }
    // );

    // return result;

    return await getRepository(Novel).findOne({ where: { id: chapter.novelId } }) || null
  }
}