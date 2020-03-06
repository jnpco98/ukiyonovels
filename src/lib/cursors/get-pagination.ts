import { fromGlobalId } from 'graphql-relay';
import { parsePagination } from './parse-pagination';
import { ConnectionArgs } from './connection-args';
import { CursorDecoded } from './types/cursor-decoded';
import { ObjectLiteral } from 'typeorm';

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
        try {
          const { id } = JSON.parse(fromGlobalId(meta.after).id) as CursorDecoded;
          params.andWhere?.push({ op: `increment_id > :gtval`, value: { gtval: id } });
        } catch (e) {
          throw new Error('Invalid cursor');
        }
      }
      return params;
    }
    case 'backward': {
      const params = { limit: meta.last, andWhere: [] } as ParsedPagination;
      
      if(meta.before) {
        try {
          const { id } = JSON.parse(fromGlobalId(meta.before).id) as CursorDecoded;
          params.andWhere?.push({ op: `increment_id < :ltval`, value: { ltval: id } });
        } catch (e) {
          throw new Error('Invalid cursor');
        }
      }
      return params;
    }
    default:
      return {};
  }
}
