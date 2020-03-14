import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class PageInfo {
  @Field()
  hasNextPage: boolean;

  @Field()
  hasPreviousPage: boolean;

  @Field(() => String, { nullable: true })
  startCursor: String;

  @Field(() => String, { nullable: true })
  endCursor: String;

  @Field()
  count: number;
}
