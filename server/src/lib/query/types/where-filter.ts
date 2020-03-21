/**
 * Definition for where types
 *
 * ex:
 * is: String
 * { connection(first: 5, where: { AND: { { property: { is: 'stringvalue' } } } }) }
 */
export interface WhereFilterParams {
  [key: string]: any;
}
