import { fromGlobalId } from 'graphql-relay';
import { parsePagination } from './parse-pagination';
import { ConnectionArgs } from './connection-args';
import { CursorDecoded } from './types/cursor-decoded';
import { ObjectLiteral } from 'typeorm';

// Fix paginfo
// pascalcalse parse-input fieldname
// instead of returning limit and offset
// return where clause and limit
// validator positive last and after
// validator last is not used with after

type ParsedPagination = {
  limit?: number;
  andWhere?: {
    op: string;
    value: ObjectLiteral;
  }[];
}

export function getPagination(connArgs: ConnectionArgs): ParsedPagination {
  const meta = parsePagination(connArgs);

  switch (meta.pagingType) {
    case 'forward': {
      const params = { limit: meta.first, andWhere: [] } as ParsedPagination;
      
      if(meta.after) {
        const { id } = JSON.parse(fromGlobalId(meta.after).id) as CursorDecoded;
        params.andWhere?.push({ op: `entity_id > :gtvalue`, value: { gtvalue: id } });
      } 

      return params;
    }
    case 'backward': {
      const params = { limit: meta.last, andWhere: [] } as ParsedPagination;
      
      if(meta.before) {
        const { id } = JSON.parse(fromGlobalId(meta.before).id) as CursorDecoded;
        params.andWhere?.push({ op: `entity_id < :ltvalue`, value: { ltvalue: id } });
      }

      return params;
    }
    default:
      return {};
  }
}
