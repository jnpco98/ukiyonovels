import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import { User } from '../../entity/user';
import ROLES from '../../constants/roles';
import { TokenDecoded } from './types/token-decoded';

export async function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const accessToken = authHeader && authHeader.split(' ')[1];

  req.auth = { ...req.auth, role: ROLES.anonymous, userId: null };

  if (accessToken) {
    try {
      const decoded = verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET!
      ) as TokenDecoded;
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
