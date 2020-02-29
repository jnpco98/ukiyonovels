import { Resolver, Mutation, Arg } from 'type-graphql';
import bcrypt from 'bcrypt';
import { User } from "../../entity/user";
import { generateTokens } from '../../utilities/auth/token';
import { AuthTokens } from '../../entity/token';
import { TokenCreateInput } from './token-base';
import { REFRESH_TOKEN_LIMIT } from '../../constants/token';

@Resolver()
export class TokenCreateResolver {  
  @Mutation(returns => AuthTokens, { name: 'tokenCreate', nullable: true })
  async createToken(
    @Arg('data') { password, email }: TokenCreateInput
  ): Promise<AuthTokens | null> {
    const user = await User.findOne({ where: { email } });
    const userIsValid = await bcrypt.compare(password, user?.password || '');
    if(!user || !user.confirmed || !userIsValid) return null;

    const userActiveTokensCount = await AuthTokens.count({ 
      where: { 
        creatorId: user.id, 
        archived: false 
      } 
    });

    if(userActiveTokensCount + 1 > REFRESH_TOKEN_LIMIT) return null;
    
    const { accessToken, refreshToken } = generateTokens(user);

    const tokens = new AuthTokens();
    tokens.refreshToken = refreshToken;
    tokens.accessToken = accessToken;
    tokens.creatorId = user.id;
    await tokens.save();
    
    return tokens;
  }
}