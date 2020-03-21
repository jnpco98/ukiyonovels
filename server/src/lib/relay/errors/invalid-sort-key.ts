import { ApolloError } from 'apollo-server-express';

const SORT_ERROR_CODE = 'GRAPHQL_SORT_ERROR';

/**
 * Thrown when the sort key is not valid
 * for the current Graphql Object Type
 */
export class InvalidSortKeyError extends ApolloError {
  constructor() {
    super('Invalid sort key', SORT_ERROR_CODE);
  }
}
