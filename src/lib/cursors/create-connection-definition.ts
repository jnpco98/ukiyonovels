import { ConnectionCursor, Connection as RelayConnection, Edge as RelayEdge } from "graphql-relay";
import { TypeValue } from "type-graphql/dist/decorators/types";
import { ObjectType, Field } from "type-graphql";

import { PageInfo } from "./page-info";

export function createConnectionDefinition<T extends TypeValue>(resource: string, NodeType: T) {
  @ObjectType(`${resource}Edge`)
  class Edge implements RelayEdge<T> {
    @Field(() => NodeType)
    node: T;

    @Field(() => String)
    cursor: ConnectionCursor;
  }

  @ObjectType(`${resource}Connection`)
  class Connection implements RelayConnection<T> {
    @Field()
    pageInfo: PageInfo;

    @Field(() => [Edge])
    edges: Edge[];
  }

  return {
    Connection, Edge
  }
}
