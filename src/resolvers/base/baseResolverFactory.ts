import { ClassType, Resolver, Query, Arg, Authorized } from "type-graphql";
import { BaseEntity } from '../../entity/entity';
import { getRepository, FindManyOptions } from "typeorm";

interface BaseResolverParams<T> {
  ECls: ClassType<T>;
  resource: String;
  queryAuthorizationParams?: string[];
}

interface FilterParams {
  filter: {
    [key: string]: string;
  }
  skip: number;
  take: number;
}

export function createBaseResolver<T extends BaseEntity>(params: BaseResolverParams<T>) {
  const { ECls, resource, queryAuthorizationParams = [] } = params;

  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    @Authorized(queryAuthorizationParams)
    @Query(type => ECls, { name: `get${resource}` })
    async getOne(id: number) {
      return await getRepository(ECls).findOne(id);
    }

    @Authorized(queryAuthorizationParams)
    @Query(type => [ECls], { name: `getAll${resource}` })
    async getAll(@Arg("data") data: FilterParams ) {
      return await getRepository(ECls).find(this.buildFilterOptions(data));
    }

    abstract buildFilterOptions(data: FilterParams): FindManyOptions<T>;
  }

  return BaseResolver;
}