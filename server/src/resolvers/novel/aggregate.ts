import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';

import { Novel, NovelAggregate } from '../../entity/novel';
import { consolidateAndAggregateQuery } from '../base/utilities/aggregate';
import ROLES from '../../constants/roles';
import { getAndUpdateNovelRating } from './base';

@Resolver()
export class NovelUtilsResolver {
  @Query((returns) => [NovelAggregate], { name: `novelAggregateTypes`, defaultValue: [] })
  async novelAggregateTypes(
    @Arg(`reverse`, () => Boolean, { nullable: true }) reverse?: boolean,
    @Arg(`orderCount`, () => Boolean, { nullable: true }) orderCount?: boolean
  ) {
    return consolidateAndAggregateQuery({
      EntityType: Novel,
      field: 'type',
      order: reverse ? 'DESC' : 'ASC',
      orderCount
    });
  }

  @Query((returns) => [NovelAggregate], { name: `novelAggregateStatus`, defaultValue: [] })
  async novelAggregateStatus(
    @Arg(`reverse`, () => Boolean, { nullable: true }) reverse?: boolean,
    @Arg(`orderCount`, () => Boolean, { nullable: true }) orderCount?: boolean
  ) {
    return consolidateAndAggregateQuery({
      EntityType: Novel,
      field: 'status',
      order: reverse ? 'DESC' : 'ASC',
      orderCount
    });
  }

  @Query((returns) => [NovelAggregate], { name: `novelAggregateGenres`, defaultValue: [] })
  async novelAggregateGenres(
    @Arg(`reverse`, () => Boolean, { nullable: true }) reverse?: boolean,
    @Arg(`orderCount`, () => Boolean, { nullable: true }) orderCount?: boolean
  ) {
    return consolidateAndAggregateQuery({
      EntityType: Novel,
      field: 'genres',
      order: reverse ? 'DESC' : 'ASC',
      array: true,
      orderCount
    });
  }

  @Query((returns) => [NovelAggregate], { name: `novelAggregateTags`, defaultValue: [] })
  async novelAggregateTags(
    @Arg(`reverse`, () => Boolean, { nullable: true }) reverse?: boolean,
    @Arg(`orderCount`, () => Boolean, { nullable: true }) orderCount?: boolean
  ) {
    return consolidateAndAggregateQuery({
      EntityType: Novel,
      field: 'tags',
      order: reverse ? 'DESC' : 'ASC',
      array: true,
      orderCount
    });
  }

  @Mutation((returns) => Novel, { nullable: true })
  @Authorized([ROLES.owner, ROLES.moderator])
  async novelRefreshRating(@Arg('id') novelId?: string) {
    const novel = await Novel.findOne({ where: { archived: false, id: novelId } });
    if (!novel) return null;

    const rating = await getAndUpdateNovelRating(novel, true);
    novel.rating = rating;
    return novel;
  }
}
