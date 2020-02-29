import { TypeValue } from "type-graphql/dist/decorators/types";
import { ObjectType, Field, ArgsType } from "type-graphql";
import Relay from 'graphql-relay';
import GQLJson from 'graphql-type-json';

export type ConnectionCursor = Relay.ConnectionCursor;

@ObjectType()
export class PageInfo implements Relay.PageInfo {
  @Field()
  hasNextPage: boolean;

  @Field()
  hasPreviousPage: boolean;

  @Field(() => String)
  startCursor: ConnectionCursor;
  
  @Field(() => String)
  endCursor: ConnectionCursor;
}

type PagingMeta = 
  | { pagingType: 'forward'; after?: string; first: number }
  | { pagingType: 'backward'; before?: string; last: number }
  | { pagingType: 'none'; }

@ArgsType()
export class ConnectionArgs implements Relay.ConnectionArguments {
  @Field(() => String, { description: 'Paginate before opaque cursor', nullable: true })
  before?: ConnectionCursor;

  @Field(() => String, { description: 'Paginate after opaque cursor',nullable: true })
  after?: ConnectionCursor;

  @Field({ nullable: true })
  first?: number;

  @Field({ nullable: true })
  last?: number;

  private getId(cursor: ConnectionCursor){
    return parseInt(Relay.fromGlobalId(cursor).id, 10);
  }

  private nextId(cursor: ConnectionCursor) {
    return this.getId(cursor) + 1;
  }

  private validatePagination(): PagingMeta {
    const { first = 0, last = 0, after, before } = this;
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

  get pagination() {
    const meta = this.validatePagination();

    switch(meta.pagingType) {
      case 'forward': {
        return {
          limit: meta.first, 
          offset: meta.after ? this.nextId(meta.after) : 0
        }
      }
      case 'backward': {
        const { last, before } = meta;
        let limit = last;
        let offset = this.getId(before!) - last;

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
}

export function createConnectionType<T extends TypeValue>(resource: string, NodeType: T) {
  @ObjectType(`${resource}Edge`)
  class Edge implements Relay.Edge<T> {
    @Field(() => NodeType)
    node: T;

    @Field(() => String)
    cursor: ConnectionCursor;

    @Field(() => GQLJson)
    cursorDecoded = () => Relay.fromGlobalId(this.cursor);
  }

  @ObjectType(`${resource}Connection`)
  class Connection implements Relay.Connection<T> {
    @Field()
    pageInfo: PageInfo;

    @Field(() => [Edge])
    edges: Edge[];
  }

  return {
    Connection, Edge
  }
}
