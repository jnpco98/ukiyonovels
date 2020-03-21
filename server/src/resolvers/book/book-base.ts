import { createBaseResolver } from '../base/base-resolver';
import { Book } from '../../entity/book';
import ROLES from '../../constants/roles';
import { InputType, Field } from 'type-graphql';
import { StringWhere } from '../../lib/query/where-type';
import { ContextHooks } from '../base/types/context-hooks';
import { BaseResolverParams } from '../base/types/resolver';

@InputType()
export class BookQueryableInput {
  @Field(type => StringWhere, { nullable: true })
  title?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  description?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  isbn?: typeof StringWhere;
}

const authorization = {
  get: [ROLES.anonymous],
  paginate: [ROLES.anonymous],
  create: [ROLES.owner],
  update: [ROLES.owner],
  delete: [ROLES.owner]
};

const contextHooks: ContextHooks<Book> = {};

const resolverConfig: BaseResolverParams<Book, BookQueryableInput, Book> = {
  EntityType: Book,
  QueryableInputType: BookQueryableInput,
  MutationInputType: Book,
  authorization,
  contextHooks,
  resource: 'book'
};

const {
  ConnectionType,
  WhereInputType,
  BaseGetResolver,
  BaseSearchResolver,
  BaseCreateResolver,
  BaseUpdateResolver,
  BaseDeleteResolver
} = createBaseResolver(resolverConfig);

export {
  ConnectionType as BookConnectionType,
  WhereInputType as BookWhereInputType,
  BaseGetResolver as BaseBookGetResolver,
  BaseSearchResolver as BaseBookSearchResolver,
  BaseCreateResolver as BaseBookCreateResolver,
  BaseUpdateResolver as BaseBookUpdateResolver,
  BaseDeleteResolver as BaseBookDeleteResolver
};
