import { TypeValue } from "type-graphql/dist/decorators/types";
import { ObjectType, Field, ArgsType } from "type-graphql";
import { BaseEntity, FindManyOptions } from "typeorm";
import { 
  fromGlobalId, 
  ConnectionCursor, 
  ConnectionArguments, 
  PageInfo as RelayPageInfo, 
  Connection as RelayConnection, 
  Edge as RelayEdge 
} from "graphql-relay";

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

type PagingMeta = 
  | { pagingType: 'forward'; after?: string; first: number }
  | { pagingType: 'backward'; before?: string; last: number }
  | { pagingType: 'none'; }

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
    return getCoordinates(this);
  }
}

function getId(cursor: ConnectionCursor) {
  return parseInt(fromGlobalId(cursor).id, 10);
}

function nextId(cursor: ConnectionCursor) {
  return getId(cursor) + 1;
}

function getCoordinates(connArgs: ConnectionArgs) {
  const meta = getPaginationParams(connArgs);

  switch(meta.pagingType) {
    case 'forward': {
      return {
        limit: meta.first, 
        offset: meta.after ? nextId(meta.after) : 0
      }
    }
    case 'backward': {
      const { last, before } = meta;
      let limit = last;
      let offset = getId(before!) - last;

      if(offset < 0) {
        limit = Math.max(last + offset, 0);
        offset = 0;
      }

      return { offset, limit };
    }
    default: 
      return {};
  }
}

function getPaginationParams(connArgs: ConnectionArgs): PagingMeta {
  const { first = 0, last = 0, after, before } = connArgs;
  const paginatingForward = !!first || !!after;
  const paginatingBackward = !!last || !!before;

  if(paginatingForward && paginatingBackward) 
    throw new Error('Cannot paginate forward and backward at the same time');

  if((paginatingForward && before) || (paginatingBackward && after)) 
    throw new Error('Must use either first/after or last/before');
  
  if((paginatingForward && first < 0) || (paginatingBackward && last < 0))
    throw new Error('Pagination must be positive');

  if(last && !before) 
    throw new Error('When paginating backwards, a "before" argument is required')
  
  if(paginatingForward) return { pagingType: 'forward', after, first };
  if(paginatingBackward) return { pagingType: 'backward', before, last };
  return { pagingType: 'none' };
}

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
