import { ApolloError } from 'apollo-server-express';

const COMPLEXITY_ERROR_CODE = 'GRAPHQL_COMPLEXITY_ERROR';

export class MaxComplexityError extends ApolloError {
  constructor(cost: number, maxCost: number) {
    super(
      `Query has a cost of ${cost} which exceeds the max cost of ${maxCost}`,
      COMPLEXITY_ERROR_CODE
    );
  }
}
