export type PagingMeta = 
| { pagingType: 'forward'; after?: string; first: number; }
| { pagingType: 'backward'; before?: string; last: number; }
| { pagingType: 'none'; }