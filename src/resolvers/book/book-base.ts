import { createBaseResolver } from "../base/base-resolver";
import { Book } from "../../entity/book";
import ROLES from "../../constants/roles";
import { InputType, Field } from "type-graphql";
import { StringWhere } from "../../lib/query/create-type";

@InputType()
export class BookQueryableInput {
  @Field(type => StringWhere, { nullable: true })
  title?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  description?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  isbn?: typeof StringWhere;
}

const {
  BaseGetResolver, BaseSearchResolver,
  BaseCreateResolver, BaseUpdateResolver,
  BaseDeleteResolver
} = createBaseResolver({
  EntityType: Book,
  QueryableInputType: BookQueryableInput,
  MutationInputType: Book,
  authorization: {
    get: [ROLES.anonymous],
    paginate: [ROLES.anonymous],
    create: [ROLES.owner],
    update: [ROLES.owner],
    delete: [ROLES.owner]
  },
  resource: 'book'
});

export {
  BaseGetResolver, BaseSearchResolver,
  BaseCreateResolver, BaseUpdateResolver,
  BaseDeleteResolver
};