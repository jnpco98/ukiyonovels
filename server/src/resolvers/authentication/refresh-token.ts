import { Resolver, Mutation, Arg } from 'type-graphql';
import bcrypt from 'bcrypt';
import { User } from '../../entity/user';
import { generateTokens } from '../../utilities/auth/token';
import { AuthTokens } from '../../entity/token';
import { verify } from 'jsonwebtoken';
import { TokenRefreshInput } from './token-base';

@Resolver()
export class TokenRefreshResolver {
  /**
   * Refreshing an access token
   * 
   * Validates and authenticates the
   * user and the refresh token, and
   * returns an access token with the
   * appropriate access level permissions
   */
  @Mutation(returns => AuthTokens, { name: 'tokenRefresh', nullable: true })
  async refreshAccessToken(
    @Arg('data') { password, email, token }: TokenRefreshInput
  ): Promise<AuthTokens | null> {
    const user = await User.findOne({ where: { email } });
    const userIsValid = await bcrypt.compare(password, user?.password || '');
    if (!user || !user.confirmed || !userIsValid) return null;

    const authToken = await AuthTokens.findOne({
      where: {
        archived: false,
        refreshToken: token
      }
    });

    /**
     * If the refresh token is already archived
     *   which could be done either via a cron,
     *   expiration, or manually by a mod
     * then return null
     */
    if (!authToken || !authToken.refreshToken) return null;

    /**
     * If refresh token is valid,
     * return an access token along with it,
     * 
     * If it's not valid (expired, compromised),
     * archive the auth token
     */
    try {
      verify(token, process.env.REFRESH_TOKEN_SECRET!);
      const { accessToken } = generateTokens(user);
      authToken.accessToken = accessToken;
      return authToken;
    } catch (e) {
      const expiredAuthToken = AuthTokens.create(authToken);
      expiredAuthToken.archived = true;
      await expiredAuthToken.save();

      return e;
    }
  }
}
