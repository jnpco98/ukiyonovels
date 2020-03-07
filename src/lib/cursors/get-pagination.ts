import { parsePagination } from './parse-pagination';
import { ConnectionArgs } from './connection-args';
import { unBase64 } from '../../utilities/base64/encode';
import { ClassType } from 'type-graphql';
import { getConnection, ObjectLiteral } from 'typeorm';
import { CursorNotMatchingSort, InvalidCursor } from './errors/invalid-cursor';
import { InvalidSortKey } from './errors/invalid-sort-key';

interface ParsedPagination {
  limit?: number;
  dbSortKey: string;
  operation?: {
    ops: string;
    map: {
      opval: string;
    };
  };
}

export function getPagination<T>(
  connArgs: ConnectionArgs
): (EntityType: ClassType<T>) => ParsedPagination {
  return (EntityType: ClassType<T>): ParsedPagination => {
    const meta = parsePagination(connArgs);
    const connectionProperties = getConnectionProperties(EntityType);
    if (!connArgs.sortKey) connArgs.sortKey = 'incrementId';

    if (!Object.keys(connectionProperties).includes(connArgs.sortKey))
      throw new InvalidSortKey();

    const { dbSortKey } = connectionProperties[connArgs.sortKey];

    switch (meta.type) {
      case 'forward': {
        const params = { limit: meta.first, dbSortKey } as ParsedPagination;
        if (meta.after) {
          try {
            const { def, type } = JSON.parse(unBase64(meta.after));
            if (type != connArgs.sortKey) throw new CursorNotMatchingSort();
            params.operation = {
              ops: `${dbSortKey} > :opval`,
              map: { opval: def }
            };
          } catch (e) {
            if (e instanceof CursorNotMatchingSort)
              throw new CursorNotMatchingSort();
            throw new InvalidCursor();
          }
        }
        return params;
      }
      case 'backward': {
        const params = { limit: meta.last, dbSortKey } as ParsedPagination;
        if (meta.before) {
          try {
            const { def, type } = JSON.parse(unBase64(meta.before));
            if (type != connArgs.sortKey) throw new CursorNotMatchingSort();
            params.operation = {
              ops: `${dbSortKey} < :opval`,
              map: { opval: def }
            };
          } catch (e) {
            if (e instanceof CursorNotMatchingSort)
              throw new CursorNotMatchingSort();
            throw new InvalidCursor();
          }
        }
        return params;
      }
      default:
        return { dbSortKey };
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
