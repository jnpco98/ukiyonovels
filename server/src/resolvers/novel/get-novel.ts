import { Resolver, Query, Arg } from 'type-graphql';
import { BaseNovelGetResolver } from './novel-base';
import { Novel } from '../../entity/novel';

/**
 * Novel Get Resolver
 *
 * Gets a single resource using the resource id
 */
@Resolver()
export class NovelGetResolver extends BaseNovelGetResolver {
  @Query(returns => Novel, { name: `novelBySlug`, nullable: true })
  async getNovelBySlug(
    @Arg('slug') slug?: string
  ) {
    return await Novel.findOne({ where: { slug, archived: false } });
  }
}
