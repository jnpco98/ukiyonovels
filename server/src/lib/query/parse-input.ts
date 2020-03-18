import { WhereExpression } from 'typeorm';
import { snakeCase } from '../../utilities/string/snake-case';

/**
 * Parses the where input to sql operations
 */
export function parseInput<T extends { [key: string]: T | T[] }>(
  query: WhereExpression,
  where: T,
  andOr: 'andWhere' | 'orWhere'
) {
  const whereArgs = Object.entries(where);

  whereArgs.map(whereArg => {
    const [fieldName, filters] = whereArg;
    const sFieldName = snakeCase(fieldName);
    const ops = Object.entries(filters);

    ops.map(parameters => {
      const [operation, value] = parameters;

      switch (operation) {
        /**
         * Query for records where the 
         * field value is equals the query value
         */
        case 'is': {
          query[andOr](`${sFieldName} = :isvalue`, { isvalue: value });
          break;
        }

        /**
         * Query for records where the
         * field value is not equals the query value 
         */
        case 'not': {
          query[andOr](`${sFieldName} != :notvalue`, { notvalue: value });
          break;
        }

        /**
         * Query for records where the 
         * field value is in the query set
         */
        case 'in': {
          query[andOr](`${sFieldName} IN (:...invalue)`, { invalue: value });
          break;
        }

        /**
         * Query for records where the 
         * field value is not in the query set
         */
        case 'notIn': {
          query[andOr](`${sFieldName} NOT IN (:...notinvalue)`, {
            notinvalue: value
          });
          break;
        }

        /**
         * Query for records where the
         * field value is less than the query value
         */
        case 'lt': {
          query[andOr](`${sFieldName} < :ltvalue`, { ltvalue: value });
          break;
        }

        /**
         * Query for records where the
         * field value is less than or equals the query value
         */
        case 'lte': {
          query[andOr](`${sFieldName} <= :ltevalue`, { ltevalue: value });
          break;
        }

        /**
         * Query for records where the
         * field value is greater than the query value
         */
        case 'gt': {
          query[andOr](`${sFieldName} > :gtvalue`, { gtvalue: value });
          break;
        }

        /**
         * Query for records where the
         * field value is greater than or equals the query value
         */
        case 'gte': {
          query[andOr](`${sFieldName} >= :gtevalue`, { gtevalue: value });
          break;
        }

        /**
         * Query for records where the
         * field value contains the query value
         * 
         * Field value and query value 
         * should both be of type string
         */
        case 'contains': {
          query[andOr](`${sFieldName} ILIKE :convalue`, {
            convalue: `%${value}%`
          });
          break;
        }
        
        /**
         * Query for records where the
         * field value doesn't contain the query value
         * 
         * Field value and query value 
         * should both be of type string
         */
        case 'notContains': {
          query[andOr](`${sFieldName} NOT ILIKE :notconvalue`, {
            notconvalue: `%${value}%`
          });
          break;
        }

        
        /**
         * Query for records where the
         * field value starts with the query value
         * 
         * Field value and query value 
         * should both be of type string
         */
        case 'startsWith': {
          query[andOr](`${sFieldName} ILIKE :swvalue`, {
            swvalue: `${value}%`
          });
          break;
        }

        /**
         * Query for records where the
         * field value doesn't start with the query value
         * 
         * Field value and query value 
         * should both be of type string
         */
        case 'notStartsWith': {
          query[andOr](`${sFieldName} NOT ILIKE :nswvalue`, {
            nswvalue: `${value}%`
          });
          break;
        }
        
        /**
         * Query for records where the
         * field value ends with the query value
         * 
         * Field value and query value 
         * should both be of type string
         */
        case 'endsWith': {
          query[andOr](`${sFieldName} ILIKE :ewvalue`, {
            ewvalue: `%${value}`
          });
          break;
        }

        /**
         * Query for records where the
         * field value doesn't end with the query value
         * 
         * Field value and query value 
         * should both be of type string
         */
        case 'notEndsWith': {
          query[andOr](`${sFieldName} ILIKE :newvalue`, {
            newvalue: `%${value}`
          });
          break;
        }
        default: {
          break;
        }
      }
    });
  });

  return query;
}
