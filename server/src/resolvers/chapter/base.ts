import { InputType, Field, Resolver, FieldResolver, Root, Args, Arg, Query } from 'type-graphql';
import { getRepository } from 'typeorm';
import { GraphQLObjectType } from 'graphql';

import { createBaseResolver } from '../base/base-resolver';
import { Chapter } from '../../entity/chapter';
import ROLES from '../../constants/roles';
import { StringWhere } from '../../lib/query/where-type';
import { ContextHooks } from '../base/types/context-hooks';
import { BaseResolverParams } from '../base/types/resolver';
import { Novel } from '../../entity/novel';
import { Book } from '../../entity/book';
import { ConnectionArgs } from '../../lib/relay/connection-args';
import { WhereAndOrParams } from '../../lib/query/types/where-and-or';
import { createCursorConnection } from '../../lib/relay/create-cursor-connection';
import { Comment } from '../../entity/comment';
import { CommentConnectionType, CommentWhereInputType } from '../comment/base';
import { slugify } from '../../utilities/string/slugify';

/**
 * Required parameters to
 * create the chapter resource
 */
@InputType()
export class ChapterQueryableInput {
  @Field((type) => StringWhere, { nullable: true })
  slug?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  novelId?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  title?: typeof StringWhere;
}

/**
 * Authorization required
 * to call a chapter action
 */
const authorization = {
  get: [ROLES.anonymous],
  paginate: [ROLES.anonymous],
  create: [ROLES.owner],
  update: [ROLES.owner],
  delete: [ROLES.owner]
};

const contextHooks: ContextHooks<Chapter> = {
  create: async (entity, ctx, data) => {
    const { title, novelId } = data as Chapter;
    const existing = await getRepository(Chapter).findOne({ where: { slug: slugify(title), archived: false, novelId }});
    if(existing) return null;
    return await entity.save();
  }
};

const resolverConfig: BaseResolverParams<Chapter, Chapter> = {
  EntityType: Chapter,
  QueryableInputType: ChapterQueryableInput,
  MutationInputType: Chapter,
  authorization,
  contextHooks,
  resource: 'chapter'
};

/**
 * Creates the base chapter resolver classes
 */
const {
  ConnectionType,
  WhereInputType,
  BaseGetResolver,
  BaseSearchResolver,
  BaseCreateResolver,
  BaseUpdateResolver,
  BaseDeleteResolver
} = createBaseResolver(resolverConfig);

export { WhereInputType as ChapterWhereInputType, ConnectionType as ChapterConnectionType };

/**
 * Chapter Create Resolver
 */
@Resolver()
export class ChapterCreateResolver extends BaseCreateResolver {}

/**
 * Chapter Delete Resolver
 *
 * Archives/Mark for deletion the selected resource
 */
@Resolver()
export class ChapterDeleteResolver extends BaseDeleteResolver {}

/**
 * Chapter Get Resolver
 *
 * Gets a single resource using the resource id
 */
@Resolver()
export class ChapterGetResolver extends BaseGetResolver {
  @Query((returns) => Chapter, { name: `chapterBySlug`, nullable: true })
  async getChapterBySlug(@Arg('novelId') novelId?: string, @Arg('slug') slug?: string) {
    return await Chapter.findOne({ where: { slug, archived: false, novelId } });
  }

  @Query((returns) => Chapter, { name: `chapterByIdx`, nullable: true })
  async getChapterByChapterIdx(@Arg('novelId') novelId?: string, @Arg('idx') idx?: number) {
    return await Chapter.findOne({ where: { idx, archived: false, novelId } });
  }
}

@Resolver((of) => Chapter)
export class PaginationResolver {
  /**
   * Gets the previous chapter
   * of the chapter entity
   *
   * @param chapter Chapter root object
   */
  @FieldResolver((returns) => Chapter, { name: `previousChapter`, nullable: true })
  async getPreviousChapter(@Root() chapter: Chapter) {
    return await getRepository(Chapter).findOne({
      id: chapter.previousId,
      archived: false
    });
  }

  /**
   * Gets the next chapter
   * of the chapter entity
   *
   * @param chapter Chapter root object
   */
  @FieldResolver((returns) => Chapter, { name: `nextChapter`, nullable: true })
  async getNextChapter(@Root() chapter: Chapter) {
    return await getRepository(Chapter).findOne({
      id: chapter.nextId,
      archived: false
    });
  }
}

/**
 * Chapter Search Resolver
 */
@Resolver((of) => Chapter)
export class ChapterSearchResolver extends BaseSearchResolver {
  /**
   * Gets the novel associated
   * with the chapter entity
   *
   * @param chapter Chapter root object
   */
  @FieldResolver((returns) => Novel)
  async novel(@Root() chapter: Chapter) {
    return await getRepository(Novel).findOne({
      id: chapter.novelId,
      archived: false
    });
  }

  /**
   * Gets the book associated
   * with the chapter entity
   *
   * @param chapter Chapter root object
   */
  @FieldResolver((returns) => Book)
  async book(@Root() chapter: Chapter) {
    return await getRepository(Book).findOne({
      id: chapter.bookId,
      archived: false
    });
  }

  /**
   * Returns a comment relay connection
   * for the chapter entity
   */
  @FieldResolver((returns) => CommentConnectionType.Connection, {
    complexity: ({ childComplexity, args }) => (args.first || args.last) * childComplexity
  })
  async comments(
    @Root() chapter: Chapter,
    @Args() connArgs: ConnectionArgs,
    @Arg(`where`, () => CommentWhereInputType || GraphQLObjectType, { nullable: true })
    query?: WhereAndOrParams
  ): Promise<any> {
    const queryBuilder = getRepository(Comment).createQueryBuilder();
    queryBuilder.andWhere('chapter_id = :isvalue', { isvalue: chapter.id });
    return await createCursorConnection(
      {
        queryBuilder,
        connArgs,
        query
      },
      Comment
    );
  }
}

/**
 * Chapter Update Resolver
 *
 * Updates a single resource using the
 * resource id and the required input parameters
 */
@Resolver()
export class ChapterUpdateResolver extends BaseUpdateResolver {}
