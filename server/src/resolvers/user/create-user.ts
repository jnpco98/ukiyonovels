import { Resolver, Mutation, Arg, InputType, Field } from 'type-graphql';
import bcrypt from 'bcrypt';
import { User } from '../../entity/user';
import { Length, IsEmail } from 'class-validator';

/**
 * Required parameters to 
 * create the user resource
 */
@InputType()
class CreateUserInput {
  @Field()
  @Length(6, 40, { message: 'Username should be between 6 to 40 characters' })
  username: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}

/**
 * Creates a new user
 * with a unique email and username
 * and a hashed password
 */
@Resolver()
export class CreateUserResolver {
  @Mutation(returns => User, { nullable: true })
  async createUser(
    @Arg('data') { username, password, email }: CreateUserInput
  ): Promise<User | null> {
    const user = new User();
    user.username = username;
    user.password = await bcrypt.hash(password, 12);
    user.email = email;

    await user.save();
    return user;
  }
}
