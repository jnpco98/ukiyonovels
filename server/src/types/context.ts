import { Request, Response } from 'express';

/**
 * Resolver Context types
 */
export interface Context {
  req: Request;
  res: Response;
}
