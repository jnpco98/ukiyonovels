import { InputType, Field } from "type-graphql";
import { createBaseResolver } from "../base/base-resolver";
import { Review } from "../../entity/review";
import ROLES from "../../constants/roles";
import { StringWhere, NumberWhere } from "../../lib/query/create-type";

@InputType()
export class ReviewQueryableInput {
  @Field(type => StringWhere, { nullable: true })
  content?: string;
  
  @Field(type => NumberWhere, { nullable: true })
  rating: number;
}

const {
  ConnectionType,
  WhereInputType,
  BaseGetResolver, 
  BaseSearchResolver,
  BaseCreateResolver, 
  BaseUpdateResolver,
  BaseDeleteResolver
} = createBaseResolver({
  EntityType: Review,
  QueryableInputType: ReviewQueryableInput,
  MutationInputType: Review,
  authorization: {
    get: [ROLES.anonymous],
    paginate: [ROLES.anonymous],
    create: [ROLES.member],
    update: [ROLES.member],
    delete: [ROLES.member]
  },
  resource: 'review'
});

export {
  ConnectionType as ReviewConnectionType,
  WhereInputType as ReviewWhereInputType,
  BaseGetResolver as BaseReviewGetResolver, 
  BaseSearchResolver as BaseReviewSearchResolver,
  BaseCreateResolver as BaseReviewCreateResolver, 
  BaseUpdateResolver as BaseReviewUpdateResolver,
  BaseDeleteResolver as BaseReviewDeleteResolver
};