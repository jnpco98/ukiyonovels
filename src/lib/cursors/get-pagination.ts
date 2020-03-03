import { fromGlobalId, ConnectionCursor } from 'graphql-relay';
import { parsePagination } from './parse-pagination';
import { ConnectionArgs } from './connection-args';

function getId(cursor: ConnectionCursor) {
  return parseInt(fromGlobalId(cursor).id, 10);
}

function nextId(cursor: ConnectionCursor) {
  return getId(cursor) + 1;
}

export function getPagination(connArgs: ConnectionArgs) {
  const meta = parsePagination(connArgs);

  switch (meta.pagingType) {
    case 'forward': {
      return {
        limit: meta.first,
        offset: meta.after ? nextId(meta.after) : 0
      };
    }
    case 'backward': {
      const { last, before } = meta;
      let limit = last;
      let offset = getId(before!) - last;

      if (offset < 0) {
        limit = Math.max(last + offset, 0);
        offset = 0;
      }

      return { offset, limit };
    }
    default:
      return {};
  }
}
