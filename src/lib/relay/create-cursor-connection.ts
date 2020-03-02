import { WhereAndOrParams } from "../query/types/where-and-or";
import { ConnectionArgs } from "../cursors/connection-args";
import { connectionFromArraySlice } from "graphql-relay";
import { BaseEntity } from "../../entity/entity";
import { SelectQueryBuilder } from "typeorm";
import { filterQuery } from "../query/filter-query";

interface CursorConnectionParams<T> {
  queryBuilder: SelectQueryBuilder<T>;
  connArgs: ConnectionArgs;
  query?: WhereAndOrParams;
}

export async function createCursorConnection<T extends BaseEntity>(connParams: CursorConnectionParams<T>) {
  const { queryBuilder, connArgs, query } = connParams;
  const { sortKey, reverse, pagination } = connArgs;
  const { limit, offset } = pagination;

  if(query) filterQuery(queryBuilder, query);

  const sort = sortKey && sortKey.trim() ? sortKey : 'created_at';
  const order = reverse ? 'DESC' : 'ASC';

  const [entities, count] = await queryBuilder
    .skip(offset).take(limit).orderBy(sort, order).getManyAndCount();

  return connectionFromArraySlice(
    entities, connArgs, {
      arrayLength: count, sliceStart: offset || 0
    }
  );
}