import { createBaseResolver } from "../base/base-resolver";
import { Novel } from "../../entity/novel";
import { InputType, Field } from "type-graphql";

import { StringWhere, NumberWhere } from "../base/where-type";
import ROLES from "../../constants/roles";

@InputType()
export class NovelQueryableInput {
  @Field(type => StringWhere, { nullable: true })
  title?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  description?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  type?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  tags?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  genres?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  origins?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  authors?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  artists?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  relatedNovels?: typeof StringWhere;

  @Field(type => StringWhere, { nullable: true })
  associatedNames?: typeof StringWhere;

  @Field(type => NumberWhere, { nullable: true })
  likes?: typeof NumberWhere;

  @Field(type => NumberWhere, { nullable: true })
  views?: typeof NumberWhere;
}

const {
  BaseGetResolver, BaseSearchResolver,
  BaseCreateResolver, BaseUpdateResolver,
  BaseDeleteResolver
} = createBaseResolver({
  EntityType: Novel,
  QueryableInputType: NovelQueryableInput,
  MutationInputType: Novel,
  authorization: {
    get: [ROLES.owner],
    paginate: [ROLES.owner],
    create: [ROLES.owner],
    update: [ROLES.owner],
    delete: [ROLES.owner]
  },
  resource: 'novel'
});

export {
  BaseGetResolver, BaseSearchResolver,
  BaseCreateResolver, BaseUpdateResolver,
  BaseDeleteResolver
};