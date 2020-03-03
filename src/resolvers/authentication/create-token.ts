import { Resolver, Mutation, Arg } from 'type-graphql';
import bcrypt from 'bcrypt';
import { User } from '../../entity/user';
import { generateTokens } from '../../utilities/auth/token';
import { AuthTokens } from '../../entity/token';
import { TokenCreateInput } from './token-base';

@Resolver()
export class TokenCreateResolver {
  @Mutation(returns => AuthTokens, { name: 'tokenCreate', nullable: true })
  async createToken(
    @Arg('data') { password, email }: TokenCreateInput
  ): Promise<AuthTokens | null> {
    const user = await User.findOne({ where: { email } });
    const userIsValid = await bcrypt.compare(password, user?.password || '');
    if (!user || !user.confirmed || !userIsValid) return null;

    const existingRefreshToken = await AuthTokens.findOne({
      where: {
        creatorId: user.id,
        archived: false
      }
    });

    const { refreshToken, accessToken } = generateTokens(user);

    if (existingRefreshToken) {
      const tokens = AuthTokens.create(existingRefreshToken);
      tokens.accessToken = accessToken;
      return tokens;
    }

    const tokens = new AuthTokens();
    tokens.refreshToken = refreshToken;
    tokens.accessToken = accessToken;
    tokens.creatorId = user.id;

    return await tokens.save();
  }
}
