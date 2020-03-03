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
import { getRepository, DeepPartial } from 'typeorm';
import { plural } from 'pluralize';

import { BaseEntity } from '../../entity/entity';
import { createConnectionDefinition } from '../../lib/cursors/create-connection-definition';
import { ConnectionArgs } from '../../lib/cursors/connection-args';
import { createWhereInputType } from '../../lib/query/create-input-type';
import { WhereAndOrParams } from '../../lib/query/types/where-and-or';
import { BaseResolverParams } from './types/resolver';
import { Context } from '../../types/context';
import { createCursorConnection } from '../../lib/relay/create-cursor-connection';

export function createBaseResolver<
  T extends BaseEntity,
  V,
  U extends DeepPartial<T>
>(params: BaseResolverParams<T, V, U>) {
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
  const WhereInputType = createWhereInputType(resource, QueryableInputType);

  @Resolver({ isAbstract: true })
  abstract class BaseGetResolver {
    @Authorized(authorization.get || [])
    @UseMiddleware(resolverMiddleware.get || [])
    @Query(returns => EntityType, { name: `${resource}`, nullable: true })
    async getOne(@Arg('id', type => ID) id: string, @Ctx() ctx: Context) {
      const entity = await getRepository(EntityType).findOne({
        where: { id, archived: false }
      });

      if (contextHooks.get) return contextHooks.get(entity, ctx);

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
      @Arg(`where`, () => WhereInputType, { nullable: true })
      query?: WhereAndOrParams
    ) {
      const queryBuilder = getRepository(EntityType).createQueryBuilder();
      return await createCursorConnection({ queryBuilder, connArgs, query });
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
    async create(
      @Arg('data', () => MutationInputType) data: U,
      @Ctx() ctx: Context
    ) {
      const entity = getRepository(EntityType).create(data);

      if (ctx.req.auth && ctx.req.auth.userId)
        entity.creatorId = ctx.req.auth.userId;

      if (contextHooks.create) {
        const hookedEntity = contextHooks.create(entity, ctx);
        return hookedEntity ? await hookedEntity.save() : null;
      }

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

        if (contextHooks.update) {
          const hookedEntity = contextHooks.update(entity, ctx);
          return hookedEntity ? await hookedEntity.save() : null;
        }

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

        if (contextHooks.delete) {
          const hookedEntity = contextHooks.delete(entity, ctx);
          return hookedEntity ? await hookedEntity.save() : null;
        }

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
