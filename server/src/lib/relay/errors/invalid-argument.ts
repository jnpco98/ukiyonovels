import { ApolloError } from 'apollo-server-express';

const PAGINATION_ERROR_CODE = 'GRAPHQL_PAGINATION_ERROR';

/**
 * Base pagination error
 */
export class InvalidPaginationError extends ApolloError {
  constructor(message: string) {
    super(message, PAGINATION_ERROR_CODE);
  }
}

/**
 * Thrown when a pagination
 * required argument wasn't provided
 *
 * ex:
 * Connection first or last wasn't provided
 * Before wasn't provided with last
 */
export class InvalidPaginationArgumentError extends InvalidPaginationError {
  constructor(message: string) {
    super(message);
  }
}
