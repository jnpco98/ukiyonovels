export class InvalidCursor extends Error {
  constructor() {
    super('Invalid cursor');
    Object.setPrototypeOf(this, InvalidCursor.prototype);
  }
}

export class CursorNotMatchingSort extends Error {
  constructor() {
    super('Cursor doesn\'t match the current sorting method');
    Object.setPrototypeOf(this, CursorNotMatchingSort.prototype);
  }
}
