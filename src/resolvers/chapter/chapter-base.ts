import { createBaseResolver } from "../base/base-resolver";
import { Chapter } from "../../entity/chapter";
import ROLES from "../../constants/roles";
import { InputType, Field } from "type-graphql";
import { StringWhere } from "../../lib/query/create-type";

@InputType()
export class ChapterQueryableInput {
  @Field(type => StringWhere, { nullable: true })
  title?: typeof StringWhere;
}

const {
  BaseGetResolver, BaseSearchResolver,
  BaseCreateResolver, BaseUpdateResolver,
  BaseDeleteResolver
} = createBaseResolver({
  EntityType: Chapter,
  QueryableInputType: ChapterQueryableInput,
  MutationInputType: Chapter,
  authorization: {
    get: [ROLES.anonymous],
    paginate: [ROLES.anonymous],
    create: [ROLES.owner],
    update: [ROLES.owner],
    delete: [ROLES.owner]
  },
  resource: 'chapter'
});

export {
  BaseGetResolver, BaseSearchResolver,
  BaseCreateResolver, BaseUpdateResolver,
  BaseDeleteResolver
};