export type PagingMeta =
  | { type: 'forward'; after?: string; first: number }
  | { type: 'backward'; before?: string; last: number }
  | { type: 'none' };
