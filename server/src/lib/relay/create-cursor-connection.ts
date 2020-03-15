import { WhereAndOrParams } from '../query/types/where-and-or';
import { ConnectionArgs } from '../cursors/connection-args';
import { BaseEntity } from '../../entity/entity';
import { SelectQueryBuilder } from 'typeorm';
import { filterQuery } from '../query/filter-query';
import { ClassType } from 'type-graphql';
import { base64 } from '../../utilities/base64/encode';
import { InvalidSortKeyError } from '../cursors/errors/invalid-sort-key';
import { DEFAULT_DB_SORT_KEY, DEFAULT_SORT_KEY } from '../cursors/get-pagination';

interface CursorConnectionParams<T> {
  queryBuilder: SelectQueryBuilder<T>;
  connArgs: ConnectionArgs;
  query?: WhereAndOrParams;
}

/**
 * @param connParams Used to calculate and process the connection
 * @param connParams.queryBuilder Existing query to be augmented with pagination data
 * @param connParams.connArgs Connection arguments which contains the page data
 * @param connParams.query Query filter
 * @param EntityType Connection Node Type
 */
export async function createCursorConnection<T extends BaseEntity>(
  connParams: CursorConnectionParams<T>,
  EntityType: ClassType<T>
) {
  const { queryBuilder, connArgs, query } = connParams;
  const { sortKey = DEFAULT_SORT_KEY, reverse, pagination } = connArgs;

  /**
   * Augments the query and uses the cursor data
   * to calculate the next page
   */
  const { limit, dbSortKey, direction } = pagination(EntityType, queryBuilder);

  if (query) filterQuery(queryBuilder, query);
  if (limit) queryBuilder.take(limit);

  /**
   * Gets the entities and it's count
   */
  const order = direction === 'backward' ? (reverse ? 'ASC' : 'DESC') : 'ASC';
  const [entities, count] = await queryBuilder
    .orderBy(dbSortKey, order)
    .addOrderBy(DEFAULT_DB_SORT_KEY, order)
    .getManyAndCount();

  const firstEdge = entities[0];
  const lastEdge = entities[entities.length - 1];

  /**
   * If a sort key argument is provided, 
   * the entities queried should have the sortkey as a property
   */
  if (sortKey && firstEdge && (firstEdge as any)[sortKey || ''] === undefined)
    throw new InvalidSortKeyError();

  /**
   * Create an edge which contains 
   * the entity as node and a cursor
   */
  const edges = entities.map(node => ({
    node,
    cursor: generateRelayId(node, sortKey)
  }));

  if (direction === 'backward') edges.reverse();

  return {
    /**
     * Calculate the pageinfo, to give 
     * more information about the previous/next page
     */
    pageInfo: {
      hasNextPage:
        connArgs.first ? (count > entities.length ? true : false) : false,
      hasPreviousPage:
        connArgs.last ? (count > entities.length ? true : false) : false,
      startCursor: entities.length ? generateRelayId(firstEdge, sortKey) : null,
      endCursor: entities.length ? generateRelayId(lastEdge, sortKey) : null,
      count
    },
    edges
  };
}

/**
 * Encodes the entity incrementId and 
 * the entity sortkey value to be used 
 * for cursor pagination
 * 
 * @param node Entity
 * @param sortKey Entity property
 */
function generateRelayId(node: BaseEntity, sortKey?: string) {
  return base64(
    JSON.stringify({
      primary: node.incrementId,
      secondary: (node as any)[sortKey || '_'] || node.incrementId,
      type: sortKey
    })
  );
}
