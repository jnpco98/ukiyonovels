import { createBaseResolver } from "../base/base-resolver";
import { Comment } from "../../entity/comment";
import ROLES from "../../constants/roles";
import { InputType, Field } from "type-graphql";
import { StringWhere, NumberWhere } from "../../lib/query/create-type";

@InputType()
export class CommentQueryableInput {
  @Field(type => StringWhere, { nullable: true })
  content?: typeof StringWhere;
}

const {
  BaseGetResolver, BaseSearchResolver,
  BaseCreateResolver, BaseUpdateResolver,
  BaseDeleteResolver
} = createBaseResolver({
  EntityType: Comment,
  QueryableInputType: CommentQueryableInput,
  MutationInputType: Comment,
  authorization: {
    get: [ROLES.anonymous],
    paginate: [ROLES.anonymous],
    create: [ROLES.owner],
    update: [ROLES.owner],
    delete: [ROLES.owner]
  },
  resource: 'comment'
});

export {
  BaseGetResolver, BaseSearchResolver,
  BaseCreateResolver, BaseUpdateResolver,
  BaseDeleteResolver
};