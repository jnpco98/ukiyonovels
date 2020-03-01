import { Resolver, Mutation, Arg } from 'type-graphql';
import bcrypt from 'bcrypt';
import { User } from "../../entity/user";
import { generateTokens } from '../../utilities/auth/token';
import { AuthTokens } from '../../entity/token';
import { verify } from 'jsonwebtoken';
import { TokenRefreshInput } from './token-base';

@Resolver()
export class TokenRefreshResolver {  
  @Mutation(returns => AuthTokens, { name: 'tokenRefresh', nullable: true })
  async refreshAccessToken(
    @Arg('data') { password, email, token }: TokenRefreshInput
  ): Promise<AuthTokens | null> {
    const user = await User.findOne({ where: { email } });
    const userIsValid = await bcrypt.compare(password, user?.password || '');
    if(!user || !user.confirmed || !userIsValid) return null;

    const authToken = await AuthTokens.findOne({ 
      where: {
        archived: false,
        refreshToken: token 
      } 
    });
    
    if(!authToken || !authToken.refreshToken) return null;

    try {
      verify(token, process.env.REFRESH_TOKEN_SECRET!);
      const { accessToken } = generateTokens(user);
      authToken.accessToken = accessToken;
      return authToken;
    } catch(e) {
      const tokens = AuthTokens.create(authToken);
      tokens.archived = true;
      await tokens.save();
      
      return e;
    }
  }
}