import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import ROLES from '../../constants/roles';
import { TokenDecoded } from './types/token-decoded';
import { User } from '../../entity/user';

/**
 * Creates the request auth object
 *
 * @param req Express Request
 * @param res Express Response
 * @param next Express Middleware Next
 */
export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  /**
   * Gets the access token from the headers authorization parameter
   */
  const accessToken = authHeader && authHeader.split(' ')[1];

  /**
   * Sets the default authorization
   * Overrides existing auth which might
   * not have come from a whitelisted resource
   *
   * The token is the only source of truth
   */
  req.auth = { ...req.auth, role: ROLES.anonymous, userId: null };

  /**
   * If an access token is passed,
   * verify the user and the user's role
   *
   * If verified, attach the appropriate auth to the user
   */
  if (accessToken) {
    try {
      const decoded = verify(accessToken, process.env.ACCESS_TOKEN_SECRET!) as TokenDecoded;
      const user = await User.findOne(decoded.userId);

      if (user && user.role === decoded.role) {
        req.auth = { ...req.auth, role: decoded.role, userId: decoded.userId };
      }
    } catch (e) {
      req.auth = { ...req.auth, role: ROLES.anonymous };
    }
  }

  next();
}
