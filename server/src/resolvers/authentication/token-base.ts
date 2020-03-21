import { createBaseResolver } from '../base/base-resolver';
import { InputType, Field } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { AuthTokens } from '../../entity/token';
import ROLES from '../../constants/roles';
import { createTokenContextHook } from './create-token';
import { BaseResolverParams } from '../base/types/resolver';
import { ContextHooks } from '../base/types/context-hooks';

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

const resolverConfig: BaseResolverParams<AuthTokens, null, TokenCreateInput> = {
  EntityType: AuthTokens,
  MutationInputType: TokenCreateInput,
  authorization,
  contextHooks,
  resource: 'token'
};

const {
  ConnectionType,
  WhereInputType,
  BaseGetResolver,
  BaseSearchResolver,
  BaseCreateResolver,
  BaseUpdateResolver,
  BaseDeleteResolver
} = createBaseResolver(resolverConfig);

export {
  ConnectionType as TokenConnectionType,
  WhereInputType as TokenWhereInputType,
  BaseGetResolver as BaseTokenGetResolver,
  BaseSearchResolver as BaseTokenSearchResolver,
  BaseCreateResolver as BaseTokenCreateResolver,
  BaseUpdateResolver as BaseTokenUpdateResolver,
  BaseDeleteResolver as BaseTokenDeleteResolver
};
