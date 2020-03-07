import { WhereAndOrParams } from '../query/types/where-and-or';
import { ConnectionArgs } from '../cursors/connection-args';
import { BaseEntity } from '../../entity/entity';
import { SelectQueryBuilder } from 'typeorm';
import { filterQuery } from '../query/filter-query';
import { ClassType } from 'type-graphql';
import { base64 } from '../../utilities/base64/decode';
import { InvalidSortKey } from '../cursors/errors/invalid-sort-key';

interface CursorConnectionParams<T> {
  queryBuilder: SelectQueryBuilder<T>;
  connArgs: ConnectionArgs;
  query?: WhereAndOrParams;
}

export async function createCursorConnection<T extends BaseEntity>(
  connParams: CursorConnectionParams<T>,
  EntityType: ClassType<T>
) {
  const { queryBuilder, connArgs, query } = connParams;
  const { sortKey = 'incrementId', reverse, pagination } = connArgs;
  const { limit, operation, dbSortKey } = pagination(EntityType);
  const order = reverse ? 'DESC' : 'ASC';

  if (query) filterQuery(queryBuilder, query);
  if (limit) queryBuilder.take(limit);


  if(operation && operation.ops && operation.map.opval) 
    queryBuilder.andWhere(operation.ops, operation.map)

  const [entities, count] = await queryBuilder
    .orderBy(dbSortKey, order)
    .getManyAndCount();

    
  const firstEdge = entities[0];
  const lastEdge = entities[entities.length - 1];
    
  if(sortKey && firstEdge && (firstEdge as any)[sortKey || ''] === undefined) throw new InvalidSortKey();
  
  return {
    pageInfo: { 
      hasNextPage: false, 
      hasPreviousPage: false,
      startCursor: entities.length ? generateRelayId(firstEdge, sortKey) : null,
      endCursor: entities.length ? generateRelayId(lastEdge, sortKey) : null,
      count
    },
    edges: entities.map(node => 
      ({ node, cursor: generateRelayId(node, sortKey) })
    )
  }
}

function generateRelayId(node: any, sortKey?: string) {
  return base64(JSON.stringify({ def: (node as any)[sortKey || '_'] || node.incrementId, type: sortKey || 'increment_id' }));
}
