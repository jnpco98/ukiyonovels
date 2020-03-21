/**
 * Defines the form of the pagination
 * - If paginating forward, the meta will contain an after and first
 * - If paginating backward, the meta will contain before and last
 */
export type PaginationMeta =
  | { type: 'forward'; after?: string; first: number }
  | { type: 'backward'; before?: string; last: number }
  | { type: 'none' };
