import { ConnectionArgs } from "./connection-args";

type PagingMeta = 
| { pagingType: 'forward'; after?: string; first: number }
| { pagingType: 'backward'; before?: string; last: number }
| { pagingType: 'none'; }

export function parsePagination(connArgs: ConnectionArgs): PagingMeta {
  const { first = 0, last = 0, after, before } = connArgs;
  const paginatingForward = !!first || !!after;
  const paginatingBackward = !!last || !!before;

  if(paginatingForward && paginatingBackward) 
    throw new Error('Cannot paginate forward and backward at the same time');

  if((paginatingForward && before) || (paginatingBackward && after)) 
    throw new Error('Must use either first/after or last/before');
  
  if((paginatingForward && first < 0) || (paginatingBackward && last < 0))
    throw new Error('Pagination must be positive');

  if(last && !before) 
    throw new Error('When paginating backwards, a "before" argument is required')
  
  if(paginatingForward) return { pagingType: 'forward', after, first };
  if(paginatingBackward) return { pagingType: 'backward', before, last };
  return { pagingType: 'none' };
}