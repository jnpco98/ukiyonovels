import { User } from '../../entity/user';
import { sign } from 'jsonwebtoken';

/**
 * Creates JWT Token from user data
 * 
 * Refresh Token 
 * - Has a 7 days expiration. Used to create access tokens
 * - Each user can have one refresh token
 * - This is validated using a database
 * 
 * Access Token 
 * - Has a 15 minutes expiration. Used to access resources 
 * - Used for authentication and authorization
 * 
 * @param user User data where token information will be extracted from
 */
export function generateTokens(user: User) {
  const userData = { userId: user.id, role: user.role };

  const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET!;
  const refreshTokenExpiration = process.env.REFRESH_TOKEN_EXP!;
  
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET!;
  const accessTokenExpiration = process.env.ACCESS_TOKEN_EXP!;

  const refreshToken = sign(userData, refreshTokenSecret, {
    expiresIn: refreshTokenExpiration
  });
  const accessToken = sign(userData, accessTokenSecret, {
    expiresIn: accessTokenExpiration
  });
  return { refreshToken, accessToken };
}
