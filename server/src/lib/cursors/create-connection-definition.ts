import { ObjectType, Field, ClassType } from 'type-graphql';

import { PageInfo } from './page-info';
import { BaseEntity } from '../../entity/entity';

/**
 * Creates the connection and edge definitions
 * 
 * @param resource Unique name for the resource type. ex: Novel Entity -> novel
 * @param NodeType Access a classtype argument that inherits from the BaseEntity
 */
export function createConnectionDefinition<T extends ClassType<BaseEntity>>(
  resource: string,
  NodeType: T
) {
  /**
   * Edge definition
   * Contains the entity node of type T
   * and it's cursor
   */
  @ObjectType(`${resource}Edge`)
  class Edge {
    @Field(() => NodeType)
    node: T;

    @Field(() => String)
    cursor: String;
  }

  /**
   * Connection definition
   * Contains the edges and the pageinfo
   */
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
