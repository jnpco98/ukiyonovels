import { Resolver, Mutation, Float } from 'type-graphql';
import { BaseNovelUpdateResolver } from './novel-base';
import { Novel } from '../../entity/novel';
import { getRepository } from 'typeorm';
import { Review } from '../../entity/review';

export async function getAndUpdateNovelRating(novel: Novel, update = true) {
  const entityAlias = 'e';
  const queryBuilder = getRepository(Review).createQueryBuilder(entityAlias);
  queryBuilder
    .select(`AVG(${entityAlias}.rating)`, 'avg')
    .andWhere('novel_id = :isvalue', { isvalue: novel.id })
    .andWhere(`archived = :archived`, { archived: false });

  const averageRating = (await queryBuilder.getRawOne() as any)['avg'];
  if(novel.rating != averageRating && update) {
    novel.rating = averageRating;
    await novel.save();
  }
  return averageRating;
}

/**
 * Novel Update Resolver
 *
 * Updates a single resource using the
 * resource id and the required input parameters
 */
@Resolver(of => Novel)
export class NovelUpdateResolver extends BaseNovelUpdateResolver {}
