import { ApolloError } from 'apollo-server-express';

const COMPLEXITY_ERROR_CODE = 'GRAPHQL_COMPLEXITY_ERROR';

/**
 * Throw this error when the
 * complexity of a query exceeds
 * the user's allotted cost
 *
 * Each user has an allotted calculated cost
 * (defaults to 1000) per query
 *
 * Will be later changed to 1000 per minute
 * with a 5 points refill every second
 */
export class MaxComplexityError extends ApolloError {
  constructor(cost: number, maxCost: number) {
    super(
      `Query has a cost of ${cost} which exceeds the user's allotted cost of ${maxCost}`,
      COMPLEXITY_ERROR_CODE
    );
  }
}
