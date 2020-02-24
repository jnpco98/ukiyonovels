import { Resolver, Mutation, Arg, InputType, Field } from 'type-graphql';
import bcrypt from 'bcrypt';
import { User } from "../../entity/user";
import { IsEmail } from "class-validator";
import { generateTokens } from '../../utilities/auth/token';
import { AuthTokens } from '../../entity/token';
import { verify } from 'jsonwebtoken';

@InputType()
class RefreshTokenInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;

  @Field()
  token: string;
}

@Resolver()
export class RefreshTokenResolver {  
  @Mutation(returns => AuthTokens, { nullable: true })
  async refreshAccessToken(
    @Arg('data') { password, email, token }: RefreshTokenInput
  ): Promise<AuthTokens | null> {
    const user = await User.findOne({ where: { email } });
    const userIsValid = await bcrypt.compare(password, user?.password || '');
    if(!user || !user.confirmed || !userIsValid) return null;

    const authToken = await AuthTokens.findOne({ where: { refreshToken: token } });
    if(!authToken || !authToken.refreshToken || authToken.archived) return null;

    try {
      verify(token, process.env.REFRESH_TOKEN_SECRET!);
      const { accessToken } = generateTokens(user);
      authToken.accessToken = accessToken;
      return authToken;
    } catch(e) {
      return e;
    }
  }
}