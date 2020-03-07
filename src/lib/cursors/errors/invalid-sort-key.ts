export class InvalidSortKey extends Error {
  constructor() {
    super('Invalid sort key');
    Object.setPrototypeOf(this, InvalidSortKey.prototype);
  }
}