export class InvalidCursorError extends Error {
  constructor() {
    super('Invalid cursor');
    Object.setPrototypeOf(this, InvalidCursorError.prototype);
  }
}

export class CursorNotMatchingSortError extends Error {
  constructor() {
    super("Cursor doesn't match the current sorting method");
    Object.setPrototypeOf(this, CursorNotMatchingSortError.prototype);
  }
}
