export class InvalidSortKeyError extends Error {
  constructor() {
    super('Invalid sort key');
    Object.setPrototypeOf(this, InvalidSortKeyError.prototype);
  }
}
