export class MaxComplexityError extends Error {
  constructor(cost: number, maxCost: number) {
    super(`Query has a cost of ${cost} which exceeds the max cost of ${maxCost}`);
  }
}