import { ConnectionCursor, ConnectionArguments } from "graphql-relay";
import { ArgsType, Field } from "type-graphql";
import { getPagination } from "./get-pagination";

@ArgsType()
export class ConnectionArgs implements ConnectionArguments {
  @Field(() => String, { description: 'Returns the elements that come before the specified cursor', nullable: true })
  before?: ConnectionCursor;

  @Field(() => String, { description: 'Returns the elements that come after the specified cursor', nullable: true })
  after?: ConnectionCursor;

  @Field({ description: 'Returns up to the first n elements from the list', nullable: true })
  first?: number;

  @Field({ description: 'Returns up to the last n elements from the list', nullable: true })
  last?: number;

  @Field({ nullable: true, description: 'Reverse the order of the list' })
  reverse?: boolean;

  @Field({ nullable: true, description: 'Sort list by the given key'})
  sortKey?: string;

  get pagination() {
    return getPagination(this);
  }
}