import { InputType, Field } from "type-graphql";
import { IsEmail } from "class-validator";

@InputType()
export class TokenCreateInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class TokenRefreshInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;

  @Field()
  token: string;
}
