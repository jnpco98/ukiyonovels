import { WhereAndOrParams } from '../query/types/where-and-or';
import { ConnectionArgs } from '../cursors/connection-args';
import { connectionFromArray } from 'graphql-relay';
import { BaseEntity } from '../../entity/entity';
import { SelectQueryBuilder } from 'typeorm';
import { filterQuery } from '../query/filter-query';

interface CursorConnectionParams<T> {
  queryBuilder: SelectQueryBuilder<T>;
  connArgs: ConnectionArgs;
  query?: WhereAndOrParams;
}

export async function createCursorConnection<T extends BaseEntity>(
  connParams: CursorConnectionParams<T>
) {
  const { queryBuilder, connArgs, query } = connParams;
  const { sortKey, reverse, pagination } = connArgs;
  const { limit, andWhere } = pagination;

  if (query) filterQuery(queryBuilder, query);
  
  if(andWhere && andWhere.length) {
    andWhere.forEach(aw => queryBuilder.andWhere(aw.op, aw.value));
  }

  const sort = sortKey && sortKey.trim() ? sortKey : 'created_at';
  const order = reverse ? 'DESC' : 'ASC';

  const entities = await queryBuilder
    .take(limit)
    .orderBy(sort, order)
    .getMany();

  return connectionFromArray(entities, connArgs);
}
