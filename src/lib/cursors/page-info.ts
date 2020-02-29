import { ObjectType, Field } from "type-graphql";
import { ConnectionCursor, PageInfo as RelayPageInfo } from "graphql-relay";

@ObjectType()
export class PageInfo implements RelayPageInfo {
  @Field()
  hasNextPage: boolean;

  @Field()
  hasPreviousPage: boolean;

  @Field(() => String, { nullable: true })
  startCursor: ConnectionCursor;
  
  @Field(() => String, { nullable: true })
  endCursor: ConnectionCursor;
}