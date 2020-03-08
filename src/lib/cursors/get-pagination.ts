import { parsePagination } from './parse-pagination';
import { ConnectionArgs } from './connection-args';
import { unBase64 } from '../../utilities/base64/encode';
import { ClassType } from 'type-graphql';
import { getConnection, ObjectLiteral, SelectQueryBuilder, Brackets } from 'typeorm';
import { CursorNotMatchingSort, InvalidCursor } from './errors/invalid-cursor';
import { InvalidSortKey } from './errors/invalid-sort-key';
import { BaseEntity } from '../../entity/entity';

interface ParsedPagination {
  limit?: number;
  dbSortKey: string;
  direction: 'forward' | 'backward';
}

export function getPagination<T extends BaseEntity>(
  connArgs: ConnectionArgs
): (EntityType: ClassType<T>, queryBuilder: SelectQueryBuilder<T>) => ParsedPagination {
  return (EntityType, queryBuilder): ParsedPagination => {
    const meta = parsePagination(connArgs);
    const connectionProperties = getConnectionProperties(EntityType);
    if (!connArgs.sortKey) connArgs.sortKey = 'incrementId';

    if (!Object.keys(connectionProperties).includes(connArgs.sortKey))
      throw new InvalidSortKey();

    const { dbSortKey } = connectionProperties[connArgs.sortKey];

    switch (meta.type) {
      case 'forward': {
        const params = { limit: meta.first, dbSortKey, direction: 'forward' } as ParsedPagination;
        if (meta.after) {
          try {
            const { primary, secondary, type } = JSON.parse(unBase64(meta.after));
            if (type != connArgs.sortKey) throw new CursorNotMatchingSort();

            queryBuilder.andWhere(`${dbSortKey} >= :secondary`, { secondary })
              .andWhere(new Brackets(q => 
                q.where(`increment_id > :primary`, { primary })
                  .orWhere(`${dbSortKey} > :secondary`, { secondary })
              ))
              
          } catch (e) {
            if (e instanceof CursorNotMatchingSort)
              throw new CursorNotMatchingSort();
            throw new InvalidCursor();
          }
        }
        return params;
      }
      case 'backward': {
        const params = { limit: meta.last, dbSortKey, direction: 'backward' } as ParsedPagination;
        if (meta.before) {
          try {
            const { primary, secondary, type } = JSON.parse(unBase64(meta.before));
            if (type != connArgs.sortKey) throw new CursorNotMatchingSort();

            queryBuilder.andWhere(`${dbSortKey} <= :secondary`, { secondary })
              .andWhere(new Brackets(q => 
                q.where(`increment_id < :primary`, { primary })
                  .orWhere(`${dbSortKey} < :secondary`, { secondary })
              ))

          } catch (e) {
            if (e instanceof CursorNotMatchingSort)
              throw new CursorNotMatchingSort();
            throw new InvalidCursor();
          }
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
