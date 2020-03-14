import { ApolloError } from "apollo-server-express";

const PAGINATION_ERROR_CODE = 'GRAPHQL_PAGINATION_ERROR';

export class InvalidPaginationError extends ApolloError {
  constructor(message: string) {
    super(message, PAGINATION_ERROR_CODE);
  }
}

export class InvalidPaginationArgumentError extends InvalidPaginationError {
  constructor(message: string) {
    super(message);
  }
}
