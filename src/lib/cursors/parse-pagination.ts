import { ConnectionArgs } from './connection-args';
import { PagingMeta } from './types/paging-meta';

export function parsePagination(connArgs: ConnectionArgs): PagingMeta {
  const { first = 0, last = 0, after, before } = connArgs;
  const paginatingForward = !!first || !!after;
  const paginatingBackward = !!last || !!before;

  if (paginatingForward && paginatingBackward)
    throw new Error('Cannot paginate forward and backward at the same time');

  if ((paginatingForward && before) || (paginatingBackward && after))
    throw new Error('Must use either first/after or last/before');

  if ((paginatingForward && first < 0) || (paginatingBackward && last < 0))
    throw new Error('Pagination must be positive');

  if (last && !before)
    throw new Error(
      'When paginating backwards, a "before" argument is required'
    );

  if (paginatingForward) return { type: 'forward', after, first };
  if (paginatingBackward) return { type: 'backward', before, last };
  return { type: 'none' };
}
