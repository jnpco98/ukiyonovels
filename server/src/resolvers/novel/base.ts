import {
  Field,
  InputType,
  Resolver,
  Query,
  Arg,
  FieldResolver,
  Root,
  Args,
  Float
} from 'type-graphql';
import { NumberWhere, StringWhere } from '../../lib/query/where-type';

import { BaseResolverParams } from '../base/types/resolver';
import { ContextHooks } from '../base/types/context-hooks';
import { Novel } from '../../entity/novel';
import ROLES from '../../constants/roles';
import { createBaseResolver } from '../base/base-resolver';
import { ConnectionArgs } from '../../lib/relay/connection-args';
import { ChapterWhereInputType, ChapterConnectionType } from '../chapter/base';
import { GraphQLObjectType } from 'graphql';
import { WhereAndOrParams } from '../../lib/query/types/where-and-or';
import { getRepository } from 'typeorm';
import { Chapter } from '../../entity/chapter';
import { createCursorConnection } from '../../lib/relay/create-cursor-connection';
import { BookConnectionType, BookWhereInputType } from '../book/base';
import { Book } from '../../entity/book';
import { ReviewConnectionType, ReviewWhereInputType } from '../review/base';
import { Review } from '../../entity/review';

/**
 * Filters for querying resource
 */
@InputType()
export class NovelQueryableInput {
  @Field((type) => StringWhere, { nullable: true })
  title?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  slug?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  description?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  type?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  tags?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  genres?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  origins?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  authors?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  artists?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  relatedNovels?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  associatedNames?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  alternativeNames?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  status?: typeof StringWhere;

  @Field((type) => NumberWhere, { nullable: true })
  year?: typeof NumberWhere;

  @Field((type) => NumberWhere, { nullable: true })
  likes?: typeof NumberWhere;

  @Field((type) => NumberWhere, { nullable: true })
  views?: typeof NumberWhere;

  @Field((type) => NumberWhere, { nullable: true })
  rating?: typeof NumberWhere;
}

/**
 * Authorization required
 * to call a novel action
 */
const authorization = {
  get: [ROLES.anonymous],
  paginate: [ROLES.anonymous],
  create: [ROLES.owner],
  update: [ROLES.owner],
  delete: [ROLES.owner]
};

const contextHooks: ContextHooks<Novel> = {};

const resolverConfig: BaseResolverParams<Novel, Novel> = {
  EntityType: Novel,
  QueryableInputType: NovelQueryableInput,
  MutationInputType: Novel,
  authorization,
  contextHooks,
  resource: 'novel'
};

export async function getAndUpdateNovelRating(novel: Novel, update = true) {
  const entityAlias = 'e';
  const queryBuilder = getRepository(Review).createQueryBuilder(entityAlias);
  queryBuilder
    .select(`AVG(${entityAlias}.rating)`, 'avg')
    .andWhere('novel_id = :isvalue', { isvalue: novel.id })
    .andWhere(`archived = :archived`, { archived: false });

  const averageRating = ((await queryBuilder.getRawOne()) as any)['avg'];
  if (novel.rating != averageRating && update) {
    novel.rating = averageRating;
    await novel.save();
  }
  return averageRating;
}

/**
 * Creates the novel chapter resolver classes
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

export { ConnectionType as NovelConnectionType, WhereInputType as NovelWhereInputType };

/**
 * Novel Create Resolver
 */
@Resolver()
export class NovelCreateResolver extends BaseCreateResolver {}

/**
 * Novel Delete Resolver
 *
 * Archives/Mark for deletion the selected resource
 */
@Resolver()
export class NovelDeleteResolver extends BaseDeleteResolver {}

/**
 * Novel Get Resolver
 *
 * Gets a single resource using the resource id
 */
@Resolver()
export class NovelGetResolver extends BaseGetResolver {
  @Query((returns) => Novel, { name: `novelBySlug`, nullable: true })
  async getNovelBySlug(@Arg('slug') slug?: string) {
    return await Novel.findOne({ where: { slug, archived: false } });
  }
}

/**
 * Novel Update Resolver
 *
 * Updates a single resource using the
 * resource id and the required input parameters
 */
@Resolver((of) => Novel)
export class NovelUpdateResolver extends BaseUpdateResolver {}

/**
 * Novel Search Resolver
 */
@Resolver((of) => Novel)
export class NovelSearchResolver extends BaseSearchResolver {
  /**
   * Returns a chapter relay connection
   * for the novel entity
   */
  @FieldResolver((returns) => ChapterConnectionType.Connection, {
    complexity: ({ childComplexity, args }) => (args.first || args.last) * childComplexity
  })
  async chapters(
    @Root() novel: Novel,
    @Args() connArgs: ConnectionArgs,
    @Arg(`where`, () => ChapterWhereInputType || GraphQLObjectType, { nullable: true })
    query?: WhereAndOrParams
  ): Promise<any> {
    const queryBuilder = getRepository(Chapter).createQueryBuilder();
    queryBuilder.andWhere('novel_id = :isvalue', { isvalue: novel.id });
    return await createCursorConnection(
      {
        queryBuilder,
        connArgs,
        query
      },
      Chapter
    );
  }

  /**
   * Returns a book relay connection
   * for the novel entity
   */
  @FieldResolver((returns) => BookConnectionType.Connection, {
    complexity: ({ childComplexity, args }) => (args.first || args.last) * childComplexity
  })
  async books(
    @Root() novel: Novel,
    @Args() connArgs: ConnectionArgs,
    @Arg(`where`, () => BookWhereInputType || GraphQLObjectType, { nullable: true })
    query?: WhereAndOrParams
  ): Promise<any> {
    const queryBuilder = getRepository(Book).createQueryBuilder();
    queryBuilder.andWhere('novel_id = :isvalue', { isvalue: novel.id });
    return await createCursorConnection(
      {
        queryBuilder,
        connArgs,
        query
      },
      Book
    );
  }

  /**
   * Returns a review relay connection
   * for the novel entity
   */
  @FieldResolver((returns) => ReviewConnectionType.Connection, {
    complexity: ({ childComplexity, args }) => (args.first || args.last) * childComplexity
  })
  async reviews(
    @Root() novel: Novel,
    @Args() connArgs: ConnectionArgs,
    @Arg(`where`, () => ReviewWhereInputType || GraphQLObjectType, { nullable: true })
    query?: WhereAndOrParams
  ): Promise<any> {
    const queryBuilder = getRepository(Review).createQueryBuilder();
    queryBuilder.andWhere('novel_id = :isvalue', { isvalue: novel.id });
    return await createCursorConnection(
      {
        queryBuilder,
        connArgs,
        query
      },
      Review
    );
  }

  /**
   * Gets novel's average rating
   * from the reviews and updates the novel field
   *
   * @param novel Novel root object
   */
  @FieldResolver((returns) => Float, { nullable: true })
  async averageRating(@Root() novel: Novel) {
    return await getAndUpdateNovelRating(novel, false);
  }
}
