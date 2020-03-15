import { ApolloError } from 'apollo-server-express';

const CURSOR_ERROR_CODE = 'GRAPHQL_CURSOR_ERROR';

/**
 * Base Cursor Error
 * Thrown when the cursor is invalid
 * 
 * ex:
 * Passed cursor can't be decoded (not a valid json)
 * Cursor doesn't contain the required properties
 */
export class InvalidCursorError extends ApolloError {
  constructor() {
    super('Invalid cursor', CURSOR_ERROR_CODE);
  }
}

/**
 * Thrown when the cursor properties 
 * doesn't match the sort key
 */
export class CursorNotMatchingSortError extends ApolloError {
  constructor() {
    super("Cursor doesn't match the current sorting method");
  }
}
