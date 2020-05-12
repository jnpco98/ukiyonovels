import { InputType, Field, Resolver, FieldResolver, Root, Args, Arg } from 'type-graphql';
import { getRepository } from 'typeorm';
import { GraphQLObjectType } from 'graphql';

import { createBaseResolver } from '../base/base-resolver';
import { Book } from '../../entity/book';
import ROLES from '../../constants/roles';
import { StringWhere } from '../../lib/query/where-type';
import { ContextHooks } from '../base/types/context-hooks';
import { BaseResolverParams } from '../base/types/resolver';
import { Novel } from '../../entity/novel';
import { ChapterConnectionType, ChapterWhereInputType } from '../chapter/base';
import { ConnectionArgs } from '../../lib/relay/connection-args';
import { WhereAndOrParams } from '../../lib/query/types/where-and-or';
import { Chapter } from '../../entity/chapter';
import { createCursorConnection } from '../../lib/relay/create-cursor-connection';

/**
 * Filters for querying resource
 */
@InputType()
export class BookQueryableInput {
  @Field((type) => StringWhere, { nullable: true })
  title?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  description?: typeof StringWhere;

  @Field((type) => StringWhere, { nullable: true })
  isbn?: typeof StringWhere;
}

/**
 * Authorization required
 * to call a book action
 */
const authorization = {
  get: [ROLES.anonymous],
  paginate: [ROLES.anonymous],
  create: [ROLES.owner],
  update: [ROLES.owner],
  delete: [ROLES.owner]
};

const contextHooks: ContextHooks<Book> = {};

const resolverConfig: BaseResolverParams<Book, Book> = {
  EntityType: Book,
  QueryableInputType: BookQueryableInput,
  MutationInputType: Book,
  authorization,
  contextHooks,
  resource: 'book'
};

/**
 * Creates the base book resolver classes
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

export { ConnectionType as BookConnectionType, WhereInputType as BookWhereInputType };

/**
 * Book Create Resolver
 */
@Resolver()
export class BookCreateResolver extends BaseCreateResolver {}

/**
 * Book Delete Resolver
 *
 * Archives/Mark for deletion the selected resource
 */
@Resolver()
export class BookDeleteResolver extends BaseDeleteResolver {}

/**
 * Book Get Resolver
 *
 * Gets a single resource using the resource id
 */
@Resolver()
export class BookGetResolver extends BaseGetResolver {}

/**
 * Book Search Resolver
 *
 * Gets a single resource using the resource id
 */
@Resolver((of) => Book)
export class BookSearchResolver extends BaseSearchResolver {
  /**
   * Gets the novel associated
   * with the book entity
   *
   * @param book Book root object
   */
  @FieldResolver((returns) => Novel)
  async novel(@Root() book: Book) {
    return await getRepository(Novel).findOne({
      id: book.novelId,
      archived: false
    });
  }

  /**
   * Returns a chapter relay connection
   * for the book entity
   */
  @FieldResolver((returns) => ChapterConnectionType.Connection, {
    complexity: ({ childComplexity, args }) => (args.first || args.last) * childComplexity
  })
  async chapters(
    @Root() book: Book,
    @Args() connArgs: ConnectionArgs,
    @Arg(`where`, () => ChapterWhereInputType || GraphQLObjectType, { nullable: true })
    query?: WhereAndOrParams
  ): Promise<any> {
    const queryBuilder = getRepository(Chapter).createQueryBuilder();
    queryBuilder.andWhere('book_id = :isvalue', { isvalue: book.id });
    return await createCursorConnection(
      {
        queryBuilder,
        connArgs,
        query
      },
      Chapter
    );
  }
}

/**
 * Book Update Resolver
 *
 * Updates a single resource using the
 * resource id and the required input parameters
 */
@Resolver()
export class BookUpdateResolver extends BaseUpdateResolver {}
