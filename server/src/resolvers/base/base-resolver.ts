import {
  Resolver,
  Query,
  Arg,
  Authorized,
  Mutation,
  ID,
  UseMiddleware,
  Args,
  Ctx
} from 'type-graphql';
import { getRepository } from 'typeorm';
import { plural } from 'pluralize';

import { BaseEntity } from '../../entity/entity';
import { createConnectionDefinition } from '../../lib/relay/create-connection-definition';
import { ConnectionArgs } from '../../lib/relay/connection-args';
import { createWhereInputType } from '../../lib/query/create-input-type';
import { WhereAndOrParams } from '../../lib/query/types/where-and-or';
import { BaseResolverParams } from './types/resolver';
import { Context } from '../../lib/resolver/context';
import { createCursorConnection } from '../../lib/relay/create-cursor-connection';
import { GraphQLObjectType } from 'graphql';

export function createBaseResolver<T extends BaseEntity, V extends any, U extends any>(
  params: BaseResolverParams<T, V, U>
) {
  const {
    EntityType,
    QueryableInputType,
    MutationInputType,
    resource,
    authorization = {},
    resolverMiddleware = {},
    contextHooks = {}
  } = params;

  const ConnectionType = createConnectionDefinition(resource, EntityType);
  const WhereInputType = QueryableInputType
    ? createWhereInputType(resource, QueryableInputType)
    : null;

  @Resolver({ isAbstract: true })
  abstract class BaseGetResolver {
    @Authorized(authorization.get || [])
    @UseMiddleware(resolverMiddleware.get || [])
    @Query(returns => EntityType, { name: `${resource}`, nullable: true })
    async getOne(@Arg('id', type => ID) id: string, @Ctx() ctx: Context) {
      const entity = await getRepository(EntityType).findOne({
        where: { id, archived: false }
      });

      if (contextHooks.get && entity) return contextHooks.get(entity, ctx, { id });

      return entity;
    }
  }

  @Resolver({ isAbstract: true })
  abstract class BaseSearchResolver {
    @Authorized(authorization.paginate || [])
    @UseMiddleware(resolverMiddleware.paginate || [])
    @Query(returns => ConnectionType.Connection, {
      name: `${plural(resource)}`,
      nullable: true,
      complexity: ({ childComplexity, args }) =>
        (args.first || args.last) * childComplexity
    })
    async paginate(
      @Args() connArgs: ConnectionArgs,
      @Arg(`where`, () => WhereInputType || GraphQLObjectType, { nullable: true })
      query?: WhereAndOrParams
    ) {
      const queryBuilder = getRepository(EntityType).createQueryBuilder();
      return await createCursorConnection({ queryBuilder, connArgs, query }, EntityType);
    }
  }

  @Resolver({ isAbstract: true })
  abstract class BaseCreateResolver {
    @Authorized(authorization.create || [])
    @UseMiddleware(resolverMiddleware.create || [])
    @Mutation(returns => EntityType, {
      name: `${resource}Create`,
      nullable: true
    })
    async create(@Arg('data', () => MutationInputType) data: U, @Ctx() ctx: Context) {
      const entity = getRepository(EntityType).create(data);

      if (ctx.req.auth && ctx.req.auth.userId) entity.creatorId = ctx.req.auth.userId;

      if (contextHooks.create) return contextHooks.create(entity, ctx, data);

      return await entity.save();
    }
  }

  @Resolver({ isAbstract: true })
  abstract class BaseUpdateResolver {
    @Authorized(authorization.update || [])
    @UseMiddleware(resolverMiddleware.update || [])
    @Mutation(returns => EntityType, {
      name: `${resource}Update`,
      nullable: true
    })
    async update(
      @Arg('id', () => ID) id: string,
      @Arg('data', () => MutationInputType) data: U,
      @Ctx() ctx: Context
    ) {
      const existing = await getRepository(EntityType).findOne({
        where: { id, archived: false }
      });

      if (existing) {
        const entity = getRepository(EntityType).merge(existing, data);
        entity.id = id;

        if (contextHooks.update) return contextHooks.update(entity, ctx, data);

        return await entity.save();
      }
      return null;
    }
  }

  @Resolver({ isAbstract: true })
  abstract class BaseDeleteResolver {
    @Authorized(authorization.delete || [])
    @UseMiddleware(resolverMiddleware.delete || [])
    @Mutation(returns => EntityType, {
      name: `${resource}Delete`,
      nullable: true
    })
    async delete(@Arg('id', () => ID) id: string, @Ctx() ctx: Context) {
      const existing = await getRepository(EntityType).findOne({
        where: { id, archived: false }
      });

      if (existing) {
        const entity = getRepository(EntityType).merge(existing);
        entity.archived = true;

        if (contextHooks.delete) return contextHooks.delete(entity, ctx, { id });

        return await entity.save();
      }
      return null;
    }
  }

  return {
    ConnectionType,
    WhereInputType,
    BaseGetResolver,
    BaseSearchResolver,
    BaseCreateResolver,
    BaseUpdateResolver,
    BaseDeleteResolver
  };
}
