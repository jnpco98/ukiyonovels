import { InputType, Field, Resolver } from 'type-graphql';
import { IsEmail } from 'class-validator';
import bcrypt from 'bcrypt';
import { AuthTokens } from '../../entity/token';
import ROLES from '../../constants/roles';
import { BaseResolverParams } from '../base/types/resolver';
import { ContextHooks } from '../base/types/context-hooks';
import { Context } from '../../lib/resolver/context';
import { User } from '../../entity/user';
import { createBaseResolver } from '../base/base-resolver';
import { generateTokens } from '../../utilities/auth/token';

/**
 * Creating an auth token
 * requires user credentials
 */
@InputType()
export class TokenCreateInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}

/**
 * Refreshing an access token
 * requires user credentials and an
 * existing refresh token
 */
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

/**
 * Authorization required
 * to call a auth token action
 */
const authorization = {
  get: [ROLES.member],
  paginate: [ROLES.owner],
  create: [ROLES.anonymous],
  update: [ROLES.owner],
  delete: [ROLES.owner]
};

const contextHooks: ContextHooks<AuthTokens> = {
  create: async (entity, ctx, data) => await createTokenContextHook(entity, ctx, data)
};

const resolverConfig: BaseResolverParams<AuthTokens, TokenCreateInput> = {
  EntityType: AuthTokens,
  MutationInputType: TokenCreateInput,
  authorization,
  contextHooks,
  resource: 'token'
};

/**
 * Creates the base token resolver classes
 */
const {
  BaseCreateResolver,
} = createBaseResolver(resolverConfig);


@Resolver()
export class TokenCreateResolver extends BaseCreateResolver {}

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
