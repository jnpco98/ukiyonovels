import { User } from '../../entity/user';
import { sign } from 'jsonwebtoken';

export function generateTokens(user: User) {
  const userData = { userId: user.id, role: user.role };
  const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET!;
  const refreshTokenExpiration = process.env.REFRESH_TOKEN_EXP!;
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET!;
  const accessTokenExpiration = process.env.ACCESS_TOKEN_EXP!;

  const refreshToken = sign(userData, refreshTokenSecret, { expiresIn: refreshTokenExpiration });
  const accessToken = sign(userData, accessTokenSecret, { expiresIn: accessTokenExpiration  });
  return { refreshToken, accessToken };
}
