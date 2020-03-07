import { parsePagination } from './parse-pagination';
import { ConnectionArgs } from './connection-args';
import { unBase64 } from '../../utilities/base64/encode';
import { ClassType } from 'type-graphql';
import { getConnection, ObjectLiteral } from 'typeorm';

interface ParsedPagination {
  limit?: number;
  dbSortKey: string;
  operation?: {
    ops: string;
    map: {
      opval: string;
    }
  };
}

function dbFieldIsNumeric(field: string) {
  return [
    "int", "int2", "int4", "int8", "integer", "tinyint", "smallint", "mediumint", "bigint", "dec", "decimal", "smalldecimal", "fixed", "numeric", "number", "uuid"
  ].includes(field.toLowerCase());
}  

export function getPagination<T>(connArgs: ConnectionArgs): (EntityType: ClassType<T>) => ParsedPagination {

  return (EntityType: ClassType<T>): ParsedPagination => {
    const meta = parsePagination(connArgs);
    const connectionProperties = getConnectionProperties(EntityType);
    if(!connArgs.sortKey) connArgs.sortKey = 'incrementId';
 
    if(!Object.keys(connectionProperties).includes(connArgs.sortKey))
      throw new Error('Invalid Sort Key');
    
    const { dbSortKey, dbSortType } = connectionProperties[connArgs.sortKey];

    switch (meta.type) {
      case 'forward': {
        const params = { limit: meta.first, dbSortKey } as ParsedPagination;
        if(meta.after) {
          try {
            const { def } = JSON.parse(unBase64(meta.after));
            params.operation = { ops: `${dbSortKey} > :opval`, map: { opval: dbFieldIsNumeric(dbSortType) ? def >> 0 : def } };
          } catch(e) {
            throw new Error(`Invalid Cursor`);
          }
        }
        return params;
      }
      case 'backward': {
        const params = { limit: meta.last, dbSortKey } as ParsedPagination;
        if(meta.before) {
          try {
            const { def } = JSON.parse(unBase64(meta.before));
            params.operation = { ops: `${dbSortKey} < :opval`, map: { opval: dbFieldIsNumeric(dbSortType) ? def >> 0 : def  } };
          } catch(e) {
            throw new Error(`Invalid Cursor`);
          }
        }
        return params
      }
      default:
        return { dbSortKey };
    }
  }
}

export function getConnectionProperties<T>(EntityType: ClassType<T>): { [key: string]: { dbSortKey: string, dbSortType: string } } {
  const connectionProperties = getConnection().getMetadata(EntityType).ownColumns
    .reduce((acc, col) => ({ ...acc, [col.propertyName]: { dbSortKey: col.databaseName, dbSortType: col.type } }), {}) as ObjectLiteral;

  return connectionProperties;
}