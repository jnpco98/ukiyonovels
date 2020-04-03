import { getRepository } from "typeorm";
import { BaseEntity } from "../../../entity/entity";
import { ClassType } from "type-graphql";
import { getConnectionProperties } from "../../../lib/relay/get-pagination";

interface AggregateParams<T> {
  EntityType: ClassType<T>;
  field: keyof T & string; 
  array?: boolean;
  order?: 'ASC' | 'DESC';
}

export function consolidateAndAggregateQuery<T extends BaseEntity>(params: AggregateParams<T>) {
  const { EntityType, field, array, order } = params;
  
  const dbField = getConnectionProperties(EntityType)[field].dbSortKey;

  return getRepository(EntityType)
    .createQueryBuilder() 
    .select(`${dbField} as field`)
    .addSelect('COUNT(*) AS count')
    .groupBy(`${dbField}`)
    .orderBy('count', order || 'ASC')
    .getRawMany();
}