import { ClassType, Resolver, Query, Arg, Authorized, Mutation, ID } from "type-graphql";
import { getRepository, FindManyOptions, ObjectLiteral } from "typeorm";
import { RelayedConnection } from "auto-relay";

import { BaseEntity } from '../../entity/entity';

interface AuthorizationRequirements {
  get?: [];
  paginate?: [];
  create?: [];
  update?: [];
  delete?: [];
}

interface InputParams {}

interface BaseResolverParams<T, U> {
  EntityType: ClassType<T>;
  InputType: ClassType<U>;
  resource: String;
  authorization: AuthorizationRequirements;
}

interface FilterParams {
  filter: {
    [key: string]: string;
  }
  skip: number;
  take: number;
}

export function createBaseResolver<T extends BaseEntity, U extends InputParams>(params: BaseResolverParams<T, U>) {
  const { EntityType, InputType, resource, authorization } = params;

  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    @Authorized(authorization.get || [])
    @Query(type => EntityType, { name: `get${resource}` })
    async getOne(id: number) {
      return await getRepository(EntityType).findOne({ 
        where: { id, archived: false } 
      });
    }

    @Authorized(authorization.paginate || [])
    @Query(type => [EntityType], { name: `getAll${resource}` })
    @RelayedConnection(() => EntityType)
    async getAll(@Arg("data") data: FilterParams ) {
      const filter = this.buildFilterOptions(data);
      filter.where = { ...filter.where as ObjectLiteral, archived: false };
      return await getRepository(EntityType).find(filter);
    }

    @Authorized(authorization.create || [])
    @Mutation(type => EntityType, { name: `create${resource}` })
    async create(@Arg("data", () => InputType) data: U) {
      const entity = getRepository(EntityType).create(data);
      return await entity.save();
    }

    @Authorized(authorization.update || [])
    @Mutation(type => EntityType, { name: `update${resource}` })
    async update(
      @Arg("id", () => ID) id: number, 
      @Arg("data", () => InputType) data: U
    ) {
      const existing = await getRepository(EntityType).findOne({ 
        where: { id, archived: false } 
      });

      if(existing) {
        const entity = getRepository(EntityType).create({ 
          ...data, id: existing.id 
        });
        return await entity.save();
      } 
      return null;
    }

    @Authorized(authorization.delete || [])
    @Mutation(type => EntityType, { name: `delete${resource}` })
    async delete(
      @Arg("id", () => ID) id: number, 
      @Arg("data", () => InputType) data: U
    ) {
      const existing = await getRepository(EntityType).findOne({ 
        where: { id: true, archived: false } 
      });

      if(existing) {
        const entity = getRepository(EntityType).create({ 
          ...data, id: existing.id, archived: true 
        });
        return await entity.save();
      }
      return null;
    }

    protected abstract buildFilterOptions(data: FilterParams): FindManyOptions<T>;
  }

  return BaseResolver;
}