import { Resolver, Query, Arg } from "type-graphql";
import { Novel, NovelAggregate } from "../../entity/novel";
import { consolidateAndAggregateQuery } from "../base/utilities/aggregate";

@Resolver()
export class NovelUtilsResolver {
  @Query(returns => [NovelAggregate], { name: `novelTypes`, defaultValue: [] })
  async getNovelTypes(
    @Arg(`reverse`, () => Boolean, { nullable: true }) reverse?: boolean
  ) {
    return consolidateAndAggregateQuery({ 
      EntityType: Novel,
      field: 'type', 
      order: reverse ? 'DESC' : 'ASC' 
    });
  }

  @Query(returns => [NovelAggregate], { name: `novelStatus`, defaultValue: [] })
  async getNovelStatuses(
    @Arg(`reverse`, () => Boolean, { nullable: true }) reverse?: boolean
  ) {
    return consolidateAndAggregateQuery({ 
      EntityType: Novel,
      field: 'status', 
      order: reverse ? 'DESC' : 'ASC' 
    });
  }

  @Query(returns => [NovelAggregate], { name: `novelGenres`, defaultValue: [] })
  async getNovelGenres(
    @Arg(`reverse`, () => Boolean, { nullable: true }) reverse?: boolean
  ) {
    return consolidateAndAggregateQuery({ 
      EntityType: Novel,
      field: 'genres', 
      order: reverse ? 'DESC' : 'ASC',
      array: true 
    });
  }

  @Query(returns => [NovelAggregate], { name: `novelTags`, defaultValue: [] })
  async getNovelTags(
    @Arg(`reverse`, () => Boolean, { nullable: true }) reverse?: boolean
  ) {
    return consolidateAndAggregateQuery({ 
      EntityType: Novel,
      field: 'tags', 
      order: reverse ? 'DESC' : 'ASC' ,
      array: true
    });
  }
}