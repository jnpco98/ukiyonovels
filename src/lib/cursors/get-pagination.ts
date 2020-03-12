import { parsePagination } from './parse-pagination';
import { ConnectionArgs } from './connection-args';
import { unBase64 } from '../../utilities/base64/encode';
import { ClassType } from 'type-graphql';
import { getConnection, ObjectLiteral, SelectQueryBuilder, Brackets } from 'typeorm';
import {
  CursorNotMatchingSort as CursorNotMatchingSortError,
  InvalidCursor
} from './errors/invalid-cursor';
import { InvalidSortKey } from './errors/invalid-sort-key';
import { BaseEntity } from '../../entity/entity';

interface ParsedPagination {
  limit?: number;
  dbSortKey: string;
  direction: 'forward' | 'backward';
}

interface CursorQueryAugment<T> {
  queryBuilder: SelectQueryBuilder<T>;
  cursor: string;
  direction: 'forward' | 'backward';
  sortKey: string;
  connectionProperties: {
    [key: string]: {
      dbSortKey: string;
    };
  };
}

export const DEFAULT_SORT_KEY = 'incrementId';
export const DEFAULT_DB_SORT_KEY = 'increment_id';

function cursorToAugmentedQuery<T>(augment: CursorQueryAugment<T>) {
  const { queryBuilder, cursor, direction, sortKey, connectionProperties } = augment;
  const { dbSortKey } = connectionProperties[sortKey];

  if (!Object.keys(connectionProperties).includes(sortKey)) throw new InvalidSortKey();

  const operation = direction === 'backward' ? '<' : '>';

  try {
    const { primary, secondary, type } = JSON.parse(unBase64(cursor));
    if (type !== sortKey) throw new CursorNotMatchingSortError();

    queryBuilder
      .andWhere(`${dbSortKey} ${operation}= :secondary`, { secondary })
      .andWhere(
        new Brackets(q =>
          q
            .where(`${DEFAULT_DB_SORT_KEY} ${operation} :primary`, { primary })
            .orWhere(`${dbSortKey} ${operation} :secondary`, { secondary })
        )
      );
  } catch (e) {
    if (e instanceof CursorNotMatchingSortError) throw new CursorNotMatchingSortError();
    throw new InvalidCursor();
  }
}

export function getPagination<T extends BaseEntity>(
  connArgs: ConnectionArgs
): (EntityType: ClassType<T>, queryBuilder: SelectQueryBuilder<T>) => ParsedPagination {
  return (EntityType, queryBuilder): ParsedPagination => {
    const meta = parsePagination(connArgs);
    const connectionProperties = getConnectionProperties(EntityType);

    const sortKey = connArgs.sortKey || DEFAULT_SORT_KEY;
    const { dbSortKey } = connectionProperties[sortKey];

    switch (meta.type) {
      case 'forward': {
        const { first, type, after } = meta;
        const params = { limit: first, dbSortKey, direction: type } as ParsedPagination;
        if (after) {
          cursorToAugmentedQuery({
            queryBuilder,
            cursor: after,
            direction: type,
            connectionProperties,
            sortKey
          });
        }
        return params;
      }
      case 'backward': {
        const { last, type, before } = meta;
        const params = { limit: last, dbSortKey, direction: type } as ParsedPagination;
        if (before) {
          cursorToAugmentedQuery({
            queryBuilder,
            cursor: before,
            direction: type,
            connectionProperties,
            sortKey
          });
        }
        return params;
      }
      default:
        return { dbSortKey, direction: 'forward' };
    }
  };
}

export function getConnectionProperties<T>(
  EntityType: ClassType<T>
): { [key: string]: { dbSortKey: string } } {
  const connectionProperties = getConnection()
    .getMetadata(EntityType)
    .ownColumns.reduce(
      (acc, col) => ({
        ...acc,
        [col.propertyName]: { dbSortKey: col.databaseName }
      }),
      {}
    ) as ObjectLiteral;

  return connectionProperties;
}
