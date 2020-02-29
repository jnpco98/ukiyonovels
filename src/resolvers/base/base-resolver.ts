import { ClassType, Resolver, Query, Arg, Authorized, Mutation, ID, UseMiddleware, ArgsType, Args } from "type-graphql";
import { getRepository, DeepPartial } from "typeorm";
import { plural } from 'pluralize';
import { RelayedConnection } from "auto-relay";

import { BaseEntity } from '../../entity/entity';
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { ConnectionArgs, createConnectionType } from "./pagination";
import { connectionFromArraySlice } from "graphql-relay";

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

interface BaseResolverParams<T extends BaseEntity, U, V extends DeepPartial<T>> {
  EntityType: ClassType<T>;
  QueryType: ClassType<U>;
  InputType: ClassType<V>;
  resource: string;
  authorization?: AuthorizationRequirements;
  resolverMiddleware?: ResolverMiddleware;
}

interface FilterParams {
  filter: {
    [key: string]: string;
  }
}

export function createBaseResolver<T extends BaseEntity, U, V extends DeepPartial<T>>(params: BaseResolverParams<T, U, V>) {
  const { EntityType, QueryType, InputType, resource, authorization = {}, resolverMiddleware = {} } = params;

  const ConnectionType = createConnectionType(resource, EntityType);

  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    @Authorized(authorization.get || [])
    @UseMiddleware(resolverMiddleware.get || [])
    @Query(returns => EntityType, { name: `${resource}`, nullable: true })
    async getOne(@Arg("id", type => ID) id: number) {
      return await getRepository(EntityType).findOne({ 
        where: { id, archived: false } 
      });
    }

    @Authorized(authorization.paginate || [])
    @UseMiddleware(resolverMiddleware.paginate || [])
    @Query(returns => ConnectionType.Connection, { name: `${plural(resource)}`, nullable: true })
    async getAll(@Args() connArgs: ConnectionArgs) {
      const { limit, offset } = connArgs.pagination;

      const [entities, count] = await getRepository(EntityType).findAndCount({
        skip: offset, take: limit
      })

      const res = connectionFromArraySlice(entities, connArgs, { 
        arrayLength: count, sliceStart: offset || 0 
      });
      console.log(res)

      return res;
      return res;
      // const filter = this.buildFilterOptions(data);
      // filter.where = { ...filter.where as ObjectLiteral, archived: false };
      // return await getRepository(EntityType).find(filter);
      return await getRepository(EntityType).find();
    }

    @Authorized(authorization.create || [])
    @UseMiddleware(resolverMiddleware.create || [])
    @Mutation(returns => EntityType, { name: `${resource}Create`, nullable: true })
    async create(@Arg("data", () => InputType) data: V) {
      const entity = getRepository(EntityType).create(data);
      return await entity.save();
    }

    @Authorized(authorization.update || [])
    @UseMiddleware(resolverMiddleware.update || [])
    @Mutation(returns => EntityType, { name: `${resource}Update`, nullable: true })
    async update(
      @Arg("id", () => ID) id: number, 
      @Arg("data", () => InputType) data: V
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

    // protected abstract buildFilterOptions(data: FilterParams): FindManyOptions<T>;
  }

  return BaseResolver;
}