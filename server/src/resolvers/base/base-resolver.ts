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
import { capitalize } from '../../utilities/string/format';

/**
 * Creates base resolvers for the ff.
 * - get, paginate, create, update, and delete
 */
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

  /**
   * Creates a an entity
   * connection and edge definition
   */
  const ConnectionType = createConnectionDefinition(capitalize(resource), EntityType);

  /**
   * Dynamic filtering definition
   */
  const WhereInputType = QueryableInputType
    ? createWhereInputType(capitalize(resource), QueryableInputType)
    : null;

  /**
   * Gets an entity using an id
   *
   * Resolver that inherits this, can provide the following overrides
   * - Authorization - roles that have access to this resource
   * - Middleware - modifies the response before and after returning it to the client
   * - ContextHooks - acts like a middleware,
   * but is more involved, in that it lets you access the response in the middle of the method
   */
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

  /**
   * Gets an entity connection
   * A query param may / not be provided
   *
   * Resolver that inherits this, can provide the following overrides
   * - Authorization - roles that have access to this resource
   * - Middleware - modifies the response before and after returning it to the client
   * - ContextHooks - acts like a middleware,
   * but is more involved, in that it lets you access the response in the middle of the method
   */
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

  /**
   * Creates an entity using the arguments
   *
   * Resolver that inherits this, can provide the following overrides
   * - Authorization - roles that have access to this resource
   * - Middleware - modifies the response before and after returning it to the client
   * - ContextHooks - acts like a middleware,
   * but is more involved, in that it lets you access the response in the middle of the method
   */
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

  /**
   * Updates an entity using an id and a set of arguments
   *
   * Resolver that inherits this, can provide the following overrides
   * - Authorization - roles that have access to this resource
   * - Middleware - modifies the response before and after returning it to the client
   * - ContextHooks - acts like a middleware,
   * but is more involved, in that it lets you access the response in the middle of the method
   */
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

  /**
   * Archives / Marks an entity for deleting using an id
   * Resolver that inherits this, can provide the following overrides
   * - Authorization - roles that have access to this resource
   * - Middleware - modifies the response before and after returning it to the client
   * - ContextHooks - acts like a middleware,
   * but is more involved, in that it lets you access the response in the middle of the method
   */
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
