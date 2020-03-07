import { InputType } from 'type-graphql';
import { createBaseResolver } from '../base/base-resolver';
import ROLES from '../../constants/roles';
import bcrypt from 'bcrypt';
import { User } from '../../entity/user';

@InputType()
export class UserQueryableInput {
}

const {
  ConnectionType,
  WhereInputType,
  BaseGetResolver,
  BaseSearchResolver,
  BaseCreateResolver,
  BaseUpdateResolver,
  BaseDeleteResolver
} = createBaseResolver({
  EntityType: User,
  QueryableInputType: UserQueryableInput,
  MutationInputType: User,
  authorization: {
    get: [ROLES.anonymous],
    paginate: [ROLES.anonymous],
    create: [ROLES.anonymous],
    update: [ROLES.member],
    delete: [ROLES.member]
  },
  contextHooks: {
    create: (entity) => {
      entity.password = bcrypt.hashSync(entity.password, 12);
      return entity;
    },
    update: (entity, ctx) => {
      return (!ctx || !ctx.req || !ctx.req.auth || !(entity.id === ctx.req.auth.userId)) ? null : entity
    },
    delete: (entity, ctx) => {
      return (!ctx || !ctx.req || !ctx.req.auth || !(entity.id === ctx.req.auth.userId)) ? null : entity
    }
  },
  resource: 'user'
});

export {
  ConnectionType as UserConnectionType,
  WhereInputType as UserWhereInputType,
  BaseGetResolver as BaseUserGetResolver,
  BaseSearchResolver as BaseUserSearchResolver,
  BaseCreateResolver as BaseUserCreateResolver,
  BaseUpdateResolver as BaseUserUpdateResolver,
  BaseDeleteResolver as BaseUserDeleteResolver
};
