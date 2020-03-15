/**
 * Extending request and response types with
 * authentication and authorization
 */
declare namespace Express {
  interface Request {
    auth: {
      userId: string | null;
      role: string;
    };
  }

  interface Response {}
}
