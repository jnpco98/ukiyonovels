import bcrypt from 'bcrypt';
import { User } from '../../entity/user';
import { generateTokens } from '../../utilities/auth/token';
import { AuthTokens } from '../../entity/token';
import { TokenCreateInput, BaseTokenCreateResolver } from './token-base';
import { Context } from '../../lib/resolver/context';
import { Resolver } from 'type-graphql';

@Resolver()
export class TokenCreateResolver extends BaseTokenCreateResolver {}

/**
 * Context hooks for creating the resource
 *
 * Contains the logic for authenticating
 * and validating users
 */
export async function createTokenContextHook(
  entity: AuthTokens,
  ctx: Context | undefined,
  data: any
) {
  const { email, password } = data as TokenCreateInput;
  const user = await User.findOne({ where: { email } });
  const userIsValid = await bcrypt.compare(password, user?.password || '');
  if (!user || !user.confirmed || !userIsValid) return null;

  /**
   * Each user can only have one
   * valid/active refresh token at once
   */
  const existingRefreshToken = await AuthTokens.findOne({
    where: {
      creatorId: user.id,
      archived: false
    }
  });

  const { refreshToken, accessToken } = generateTokens(user);

  /**
   * If a refresh token already exists,
   * just return the existing refresh token
   * along with a newly created access token
   */
  if (existingRefreshToken) {
    const tokens = AuthTokens.create(existingRefreshToken);
    tokens.accessToken = accessToken;
    return tokens;
  }

  /**
   * Else return a new refresh token and access token
   * and save the token to the database
   */
  const tokens = new AuthTokens();
  tokens.refreshToken = refreshToken;
  tokens.accessToken = accessToken;
  tokens.creatorId = user.id;

  return await tokens.save();
}
