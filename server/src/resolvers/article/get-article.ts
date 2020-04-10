import { Resolver, Query, Arg } from 'type-graphql';
import { BaseArticleGetResolver } from './article-base';
import { Article } from '../../entity/article';

/**
 * Article Get Resolver
 */
@Resolver()
export class ArticleGetResolver extends BaseArticleGetResolver {
  /**
   * Gets a single resource using the resource id or slug
   */
  @Query(returns => Article, { name: `articleBySlug`, nullable: true })
  async getNovelBySlug(
    @Arg('slug') slug?: string
  ) {
    return await Article.findOne({ where: { slug, archived: false } });
  }
}
