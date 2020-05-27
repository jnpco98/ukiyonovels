import { WhereExpression } from 'typeorm';
import { snakeCase } from '../../utilities/string/snake-case';
import nanoid from 'nanoid';

/**
 * Parses the where input to sql operations
 */
export function parseInput<T extends { [key: string]: T | T[] }>(
  query: WhereExpression,
  where: T,
  andOr: 'andWhere' | 'orWhere'
) {
  const whereArgs = Object.entries(where);

  whereArgs.map((whereArg) => {
    const [fieldName, filters] = whereArg;
    const sFieldName = snakeCase(fieldName);
    const ops = Object.entries(filters);

    ops.map((parameters) => {
      const [operation, value] = parameters;
      const key = nanoid(10).replace(/\W+/g, '-');

      switch (operation) {
        /**
         * Query for records where the
         * field value is equals the query value
         */
        case 'is': {
          query[andOr](`${sFieldName} = :${key}`, { [key]: value });
          break;
        }

        /**
         * Query for records where the
         * field value is not equals the query value
         */
        case 'not': {
          query[andOr](`${sFieldName} != :${key}`, { [key]: value });
          break;
        }

        /**
         * Query for records where the
         * field value is in the query set
         */
        case 'in': {
          query[andOr](`${sFieldName} IN (:...${key})`, { [key]: value });
          break;
        }

        /**
         * Query for records where the
         * field value is not in the query set
         */
        case 'notIn': {
          query[andOr](`${sFieldName} NOT IN (:...${key})`, {
            [key]: value
          });
          break;
        }

        /**
         * Query for records where the
         * field value is less than the query value
         */
        case 'lt': {
          query[andOr](`${sFieldName} < :${key}`, { [key]: value });
          break;
        }

        /**
         * Query for records where the
         * field value is less than or equals the query value
         */
        case 'lte': {
          query[andOr](`${sFieldName} <= :${key}`, { [key]: value });
          break;
        }

        /**
         * Query for records where the
         * field value is greater than the query value
         */
        case 'gt': {
          query[andOr](`${sFieldName} > :${key}`, { [key]: value });
          break;
        }

        /**
         * Query for records where the
         * field value is greater than or equals the query value
         */
        case 'gte': {
          query[andOr](`${sFieldName} >= :${key}`, { [key]: value });
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
          query[andOr](`${sFieldName} ILIKE :${key}`, {
            [key]: `%${value}%`
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
          query[andOr](`${sFieldName} NOT ILIKE :${key}`, {
            [key]: `%${value}%`
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
          query[andOr](`${sFieldName} ILIKE :${key}`, {
            [key]: `${value}%`
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
          query[andOr](`${sFieldName} NOT ILIKE :${key}`, {
            [key]: `${value}%`
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
          query[andOr](`${sFieldName} ILIKE :${key}`, {
            [key]: `%${value}`
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
          query[andOr](`${sFieldName} ILIKE :${key}`, {
            [key]: `%${value}`
          });
          break;
        }

        /**
         * Query for records where the
         * field value contains any of the words of the query
         *
         * Field value and query value
         * should both be of type string
         * and there's an imposed limit of 1000
         * characters because of the performance issues
         */
        case 'search': {
          if (
            (typeof value === 'string' || value instanceof String) &&
            value.trim().length &&
            value.length < 1000
          ) {
            query[andOr](`${sFieldName} ILIKE :${key}`, {
              [key]: `%${value.replace(/\s/g, '%')}%`
            });
          }
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
