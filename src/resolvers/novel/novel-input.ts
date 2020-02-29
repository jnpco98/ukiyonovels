import { InputType, Field } from "type-graphql";
import { StringWhere, NumberWhere } from "../base/where-type";

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
