import { ApolloError } from 'apollo-server-express';

const CURSOR_ERROR_CODE = 'GRAPHQL_CURSOR_ERROR';

export class InvalidCursorError extends ApolloError {
  constructor() {
    super('Invalid cursor', CURSOR_ERROR_CODE);
  }
}

export class CursorNotMatchingSortError extends ApolloError {
  constructor() {
    super("Cursor doesn't match the current sorting method");
  }
}
