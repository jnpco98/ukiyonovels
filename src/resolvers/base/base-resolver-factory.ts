import { ClassType, Resolver, Query, Arg, Authorized, Mutation, ID } from "type-graphql";
import { getRepository, DeepPartial } from "typeorm";
import { RelayedConnection } from "auto-relay";

import { BaseEntity } from '../../entity/entity';

interface AuthorizationRequirements {
  get?: string[];
  paginate?: string[];
  create?: string[];
  update?: string[];
  delete?: string[];
}

interface BaseResolverParams<T extends BaseEntity, U extends DeepPartial<T>> {
  EntityType: ClassType<T>;
  InputType: ClassType<U>;
  resource: String;
  authorization: AuthorizationRequirements;
}

interface FilterParams {
  filter: {
    [key: string]: string;
  }
}

export function createBaseResolver<T extends BaseEntity, U extends DeepPartial<T>>(params: BaseResolverParams<T, U>) {
  const { EntityType, InputType, resource, authorization } = params;

  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    @Authorized(authorization.get || [])
    @Query(returns => EntityType, { name: `get${resource}`, nullable: true })
    async getOne(@Arg("id", type => ID) id: number) {
      return await getRepository(EntityType).findOne({ 
        where: { id, archived: false } 
      });
    }

    // @Authorized(authorization.paginate || [])
    // @Query(returns => [EntityType], { name: `getAll${resource}` })
    // @RelayedConnection(() => EntityType)
    // async getAll(@Arg("data") data: FilterParams ) {
    //   const filter = this.buildFilterOptions(data);
    //   filter.where = { ...filter.where as ObjectLiteral, archived: false };
    //   return await getRepository(EntityType).find(filter);
    // }

    @Authorized(authorization.create || [])
    @Mutation(returns => EntityType, { name: `create${resource}`, nullable: true })
    async create(@Arg("data", () => InputType) data: U) {
      const entity = getRepository(EntityType).create(data);
      return await entity.save();
    }

    @Authorized(authorization.update || [])
    @Mutation(returns => EntityType, { name: `update${resource}`, nullable: true })
    async update(
      @Arg("id", () => ID) id: number, 
      @Arg("data", () => InputType) data: U
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
    @Mutation(returns => EntityType, { name: `delete${resource}`, nullable: true })
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