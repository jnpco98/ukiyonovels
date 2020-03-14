import { ConnectionArgs } from './connection-args';
import { PagingMeta } from './types/paging-meta';
import { InvalidPaginationError, InvalidPaginationArgumentError } from './errors/invalid-argument';

export function parsePagination(connArgs: ConnectionArgs): PagingMeta {
  const { first = 0, last = 0, after, before } = connArgs;

  if (!first && !last) 
    throw new InvalidPaginationArgumentError('You must provide one of first or last');

  const paginatingForward = !!first || !!after;
  const paginatingBackward = !!last || !!before;

  if (paginatingForward && paginatingBackward)
    throw new InvalidPaginationError('Cannot paginate forward and backward at the same time');

  if ((paginatingForward && before) || (paginatingBackward && after))
    throw new InvalidPaginationArgumentError('Must use either first/after or last/before');

  if ((paginatingForward && first < 0) || (paginatingBackward && last < 0))
    throw new InvalidPaginationError('Pagination must be positive');

  if (last && !before)
    throw new InvalidPaginationArgumentError('When paginating backwards, a "before" argument is required');

  if (paginatingForward) return { type: 'forward', after, first };
  if (paginatingBackward) return { type: 'backward', before, last };
  return { type: 'none' };
}
