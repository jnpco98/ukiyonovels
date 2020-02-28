import { Resolver, Mutation, Arg, InputType, Field, Ctx } from 'type-graphql';
import bcrypt from 'bcrypt';
import { User } from "../../entity/user";
import { IsEmail } from "class-validator";
import { Context } from "../../types/context";
import { generateTokens } from '../../utilities/auth/token';
import { AuthTokens } from '../../entity/token';

@InputType()
class CreateTokenInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}

@Resolver()
export class CreateTokenResolver {  
  @Mutation(returns => AuthTokens, { nullable: true })
  async createToken(
    @Arg('data') { password, email }: CreateTokenInput
  ): Promise<AuthTokens | null> {
    const user = await User.findOne({ where: { email } });
    const userIsValid = await bcrypt.compare(password, user?.password || '');
    if(!user || !user.confirmed || !userIsValid) return null;
    
    const { accessToken, refreshToken } = generateTokens(user);

    const tokens = new AuthTokens();
    tokens.refreshToken = refreshToken;
    tokens.accessToken = accessToken;
    await tokens.save();
    
    return tokens;
  }
}