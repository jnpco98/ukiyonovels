import { ClassType, Resolver, Query, Arg, Authorized, Mutation, ID, UseMiddleware, Args } from "type-graphql";
import { getRepository, DeepPartial } from "typeorm";
import { plural } from 'pluralize';

import { BaseEntity } from '../../entity/entity';
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { ConnectionArgs, createConnectionDefinition } from "./pagination";
import { connectionFromArraySlice } from "graphql-relay";
import { createWhereInput, filterQuery, WhereAndOrParams } from "../base/where-input";

interface AuthorizationRequirements {
  get?: string[];
  paginate?: string[];
  create?: string[];
  update?: string[];
  delete?: string[];
}

interface ResolverMiddleware {
  get?: Middleware<any>[];
  paginate?: Middleware<any>[];
  create?: Middleware<any>[];
  update?: Middleware<any>[];
  delete?: Middleware<any>[];
}

interface BaseResolverParams<T extends BaseEntity, V, U extends DeepPartial<T>> {
  EntityType: ClassType<T>;
  QueryableInputType: ClassType<V>;
  MutationInputType: ClassType<U>;
  
  resource: string;
  authorization?: AuthorizationRequirements;
  resolverMiddleware?: ResolverMiddleware;
}

export function createBaseResolver<T extends BaseEntity, V, U extends DeepPartial<T>>(params: BaseResolverParams<T, V, U>) {
  const { EntityType, QueryableInputType, MutationInputType, resource, authorization = {}, resolverMiddleware = {} } = params;

  const ConnectionType = createConnectionDefinition(resource, EntityType);
  const WhereInputType = createWhereInput(resource, QueryableInputType);

  @Resolver({ isAbstract: true })
  abstract class BaseGetResolver {
    @Authorized(authorization.get || [])
    @UseMiddleware(resolverMiddleware.get || [])
    @Query(returns => EntityType, { name: `${resource}`, nullable: true })
    async getOne(@Arg('id', type => ID) id: number) {
      return await getRepository(EntityType).findOne({
        where: { id, archived: false }
      });
    }
  }

  @Resolver({ isAbstract: true })
  abstract class BaseSearchResolver {
    @Authorized(authorization.paginate || [])
    @UseMiddleware(resolverMiddleware.paginate || [])
    @Query(returns => ConnectionType.Connection, { name: `${plural(resource)}`, nullable: true })
    async paginate(
      @Args() connArgs: ConnectionArgs, 
      @Arg(`${resource}Where`, 
        () => WhereInputType, { nullable: true }) query?: WhereAndOrParams
    ) {
      const { sortKey, reverse, pagination } = connArgs;
      const { limit, offset } = pagination;

      const queryBuilder = getRepository(EntityType).createQueryBuilder();
      if(query) filterQuery(queryBuilder, query);

      const sort = sortKey && sortKey.trim() ? sortKey : 'entity_id';
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
    @Query(returns => ConnectionType.Connection, { name: `${resource}Create`, nullable: true })
    async create(@Arg('data', () => MutationInputType) data: U) {
      const entity = getRepository(EntityType).create(data);
      return await entity.save();
    }
  }

  @Resolver({ isAbstract: true })
  abstract class BaseUpdateResolver {
    @Authorized(authorization.update || [])
    @UseMiddleware(resolverMiddleware.update || [])
    @Mutation(returns => EntityType, { name: `${resource}Update`, nullable: true })
    async update(
      @Arg("id", () => ID) id: number, 
      @Arg("data", () => MutationInputType) data: U
    ) {
      const existing = await getRepository(EntityType).findOne({ 
        where: { id, archived: false } 
      });

      if(existing) {
        const entity = getRepository(EntityType).merge(existing, data);
        entity.id = existing.id;
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
      @Arg("id", () => ID) id: number,
    ) {
      const existing = await getRepository(EntityType).findOne({ 
        where: { id, archived: false } 
      });

      if(existing) {
        const entity = getRepository(EntityType).merge(existing)
        entity.archived = true;
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