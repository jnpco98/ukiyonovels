import { WhereAndOrParams } from '../query/types/where-and-or';
import { ConnectionArgs } from '../cursors/connection-args';
import { BaseEntity } from '../../entity/entity';
import { SelectQueryBuilder } from 'typeorm';
import { filterQuery } from '../query/filter-query';
import { ClassType } from 'type-graphql';
import { base64 } from '../../utilities/base64/decode';
import { InvalidSortKey } from '../cursors/errors/invalid-sort-key';
import { DEFAULT_DB_SORT_KEY, DEFAULT_SORT_KEY } from '../cursors/get-pagination';

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
  const { sortKey = DEFAULT_SORT_KEY, reverse, pagination } = connArgs;
  const { limit, dbSortKey, direction } = pagination(EntityType, queryBuilder);

  if (query) filterQuery(queryBuilder, query);
  if (limit) queryBuilder.take(limit);

  const order = direction === 'backward' ? (reverse ? 'ASC' : 'DESC') : 'ASC';
  const [entities, count] = await queryBuilder
    .orderBy(dbSortKey, order)
    .addOrderBy(DEFAULT_DB_SORT_KEY, order)
    .getManyAndCount();

  const firstEdge = entities[0];
  const lastEdge = entities[entities.length - 1];

  if (sortKey && firstEdge && (firstEdge as any)[sortKey || ''] === undefined)
    throw new InvalidSortKey();

  const edges = entities.map(node => ({
    node,
    cursor: generateRelayId(node, sortKey)
  }));

  if (direction === 'backward') edges.reverse();

  return {
    pageInfo: {
      hasNextPage:
        connArgs.first !== undefined ? (count > entities.length ? true : false) : false,
      hasPreviousPage:
        connArgs.last !== undefined ? (count > entities.length ? true : false) : false,
      startCursor: entities.length ? generateRelayId(firstEdge, sortKey) : null,
      endCursor: entities.length ? generateRelayId(lastEdge, sortKey) : null,
      count
    },
    edges
  };
}

function generateRelayId(node: any, sortKey?: string) {
  return base64(
    JSON.stringify({
      primary: node.incrementId,
      secondary: (node as any)[sortKey || '_'] || node.incrementId,
      type: sortKey
    })
  );
}
