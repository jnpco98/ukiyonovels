import { Resolver, Query, Arg, Authorized, Mutation, ID, UseMiddleware, Args, Ctx } from "type-graphql";
import { getRepository, DeepPartial } from "typeorm";
import { plural } from 'pluralize';

import { BaseEntity } from '../../entity/entity';
import { connectionFromArraySlice } from "graphql-relay";
import { createConnectionDefinition } from "../../lib/cursors/create-connection-definition";
import { ConnectionArgs } from "../../lib/cursors/connection-args";
import { createWhereInputType } from "../../lib/query/create-input-type";
import { WhereAndOrParams } from "../../lib/query/types/where-and-or";
import { filterQuery } from "../../lib/query/filter-query";
import { BaseResolverParams } from "./types/resolver";
import { Context } from "../../types/context";

export function createBaseResolver<T extends BaseEntity, V, U extends DeepPartial<T>>(params: BaseResolverParams<T, V, U>) {
  const { EntityType, QueryableInputType, MutationInputType, resource, authorization = {}, resolverMiddleware = {}, contextHooks = {} } = params;

  const ConnectionType = createConnectionDefinition(resource, EntityType);
  const WhereInputType = createWhereInputType(resource, QueryableInputType);

  @Resolver({ isAbstract: true })
  abstract class BaseGetResolver {
    @Authorized(authorization.get || [])
    @UseMiddleware(resolverMiddleware.get || [])
    @Query(returns => EntityType, { name: `${resource}`, nullable: true })
    async getOne(
      @Arg('id', type => ID) id: string,
      @Ctx() ctx: Context
    ) {
      const entity = await getRepository(EntityType).findOne({
        where: { id, archived: false }
      });

      if(contextHooks.get) 
        return contextHooks.get(entity, ctx);
      
      return entity;
    }
  }

  @Resolver({ isAbstract: true })
  abstract class BaseSearchResolver {
    @Authorized(authorization.paginate || [])
    @UseMiddleware(resolverMiddleware.paginate || [])
    @Query(returns => ConnectionType.Connection, { name: `${plural(resource)}`, nullable: true })
    async paginate(
      @Args() connArgs: ConnectionArgs, 
      @Arg(
        `${resource}Where`, 
        () => WhereInputType, { nullable: true }
        ) query?: WhereAndOrParams
    ) {
      const { sortKey, reverse, pagination } = connArgs;
      const { limit, offset } = pagination;

      const queryBuilder = getRepository(EntityType).createQueryBuilder();
      if(query) filterQuery(queryBuilder, query);

      const sort = sortKey && sortKey.trim() ? sortKey : 'created_at';
      const order = reverse ? 'DESC' : 'ASC';

      const [entities, count] = await queryBuilder
        .skip(offset).take(limit).orderBy(sort, order).getManyAndCount();
      
      const result = connectionFromArraySlice(
        entities, connArgs, {
          arrayLength: count, sliceStart: offset || 0
        }
      );

      return result;
    }
  }

  @Resolver({ isAbstract: true })
  abstract class BaseCreateResolver {
    @Authorized(authorization.create || [])
    @UseMiddleware(resolverMiddleware.create || [])
    @Query(returns => EntityType, { name: `${resource}Create`, nullable: true })
    async create(
      @Arg('data', () => MutationInputType) data: U,
      @Ctx() ctx : Context
    ) {
      const entity = getRepository(EntityType).create(data);

      if(ctx.req.auth && ctx.req.auth.userId) 
        entity.creatorId = ctx.req.auth.userId;

      if(contextHooks.create) {
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
    @Mutation(returns => EntityType, { name: `${resource}Update`, nullable: true })
    async update(
      @Arg("id", () => ID) id: string, 
      @Arg("data", () => MutationInputType) data: U,
      @Ctx() ctx : Context
    ) {
      const existing = await getRepository(EntityType).findOne({ 
        where: { id, archived: false } 
      });

      if(existing) {
        const entity = getRepository(EntityType).merge(existing, data);
        entity.id = id;

        if(contextHooks.update) {
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
    @Mutation(returns => EntityType, { name: `${resource}Delete`, nullable: true })
    async delete(
      @Arg("id", () => ID) id: string,
      @Ctx() ctx : Context
    ) {
      const existing = await getRepository(EntityType).findOne({ 
        where: { id, archived: false } 
      });

      if(existing) {
        const entity = getRepository(EntityType).merge(existing)
        entity.archived = true;

        if(contextHooks.delete) {
          const hookedEntity = contextHooks.delete(entity, ctx);
          return hookedEntity ? await hookedEntity.save() : null;
        }

        return await entity.save();
      }
      return null;
    }
  }

  return {
    BaseGetResolver,
    BaseSearchResolver,
    BaseCreateResolver,
    BaseUpdateResolver,
    BaseDeleteResolver
  }
}