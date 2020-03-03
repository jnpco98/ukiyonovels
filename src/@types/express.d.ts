declare namespace Express {
  interface Request {
    auth: {
      userId: string | null;
      role: string;
    };
  }

  interface Response {}
}
