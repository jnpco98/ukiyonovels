import { getRepository, Brackets, QueryFailedError } from "typeorm";
import { BaseEntity } from "../../../entity/entity";
import { ClassType } from "type-graphql";
import { getConnectionProperties } from "../../../lib/relay/get-pagination";

interface AggregateParams<T> {
  EntityType: ClassType<T>;
  field: keyof T & string; 
  array?: boolean;
  order?: 'ASC' | 'DESC';
}

/**
 * Evaluates to 
 *  - SELECT field, COUNT(*) as count FROM novel, 
 *    jsonb_array_elements(novel.genres::jsonb) as field 
 *    WHERE jsonb_typeof(novel.genres::jsonb) = 'array' 
 *    GROUP BY field;
 * 
 * Unfortunately Typeorm currently doesn't support CROSS JOINS and LATERAL
 *  - SELECT field, COUNT(*) as count FROM novel 
 *    CROSS JOIN LATERAL jsonb_array_elements(novel.genres::jsonb) as field 
 *    WHERE jsonb_typeof(novel.genres::jsonb) = 'array' 
 *    GROUP BY field;
 */
export function consolidateAndAggregateQuery<T extends BaseEntity>(params: AggregateParams<T>) {
  const { EntityType, field, array, order } = params;
  
  const queryAlias = 'e';
  const queryBuilder = getRepository(EntityType).createQueryBuilder(queryAlias);
  const dbField = getConnectionProperties(EntityType)[field].dbSortKey;

  if(array) queryBuilder.select(`jsonb_array_elements(${queryAlias}.${field}::jsonb)`, 'field');
  else queryBuilder.select(`${dbField}`, 'field');

  return queryBuilder
    .addSelect('COUNT(*)', 'count')
    .andWhere(new Brackets(qb => qb.andWhere(`archived = :isvalue`, { isvalue: false })))
    .groupBy('field')
    .orderBy('count', order || 'ASC')
    .getRawMany();
}