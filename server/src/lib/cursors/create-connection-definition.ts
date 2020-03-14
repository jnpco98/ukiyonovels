import { TypeValue } from 'type-graphql/dist/decorators/types';
import { ObjectType, Field } from 'type-graphql';

import { PageInfo } from './page-info';

export function createConnectionDefinition<T extends TypeValue>(
  resource: string,
  NodeType: T
) {
  @ObjectType(`${resource}Edge`)
  class Edge {
    @Field(() => NodeType)
    node: T;

    @Field(() => String)
    cursor: String;
  }

  @ObjectType(`${resource}Connection`)
  class Connection {
    @Field()
    pageInfo: PageInfo;

    @Field(() => [Edge])
    edges: Edge[];
  }

  return {
    Connection,
    Edge
  };
}
