declare namespace Express {
  interface Request {
    auth: {
      userId: number | null;
      role: string 
    }
  }

  interface Response {
    
  }
}