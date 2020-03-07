import { User } from '../../entity/user';
import { sign } from 'jsonwebtoken';

export function generateTokens(user: User) {
  const refreshToken = sign(
    { userId: user.id, role: user.role },
    process.env.REFRESH_TOKEN_SECRET!,
    { expiresIn: process.env.REFRESH_TOKEN_EXP }
  );

  const accessToken = sign(
    { userId: user.id, role: user.role },
    process.env.ACCESS_TOKEN_SECRET!,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXP
    }
  );

  return { refreshToken, accessToken };
}
