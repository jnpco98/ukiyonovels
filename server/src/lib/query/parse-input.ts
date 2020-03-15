import { WhereExpression } from 'typeorm';
import { snakeCase } from '../../utilities/string/snake-case';

/**
 * Parses the where input to sql operations
 */
export function parseInput<T extends { [key: string]: any }>(
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
        case 'is': {
          query[andOr](`${sFieldName} = :isvalue`, { isvalue: value });
          break;
        }
        case 'not': {
          query[andOr](`${sFieldName} != :notvalue`, { notvalue: value });
          break;
        }
        case 'in': {
          query[andOr](`${sFieldName} IN :invalue`, { invalue: value });
          break;
        }
        case 'notIn': {
          query[andOr](`${sFieldName} NOT IN :notinvalue`, {
            notinvalue: value
          });
          break;
        }
        case 'lt': {
          query[andOr](`${sFieldName} < :ltvalue`, { ltvalue: value });
          break;
        }
        case 'lte': {
          query[andOr](`${sFieldName} <= :ltevalue`, { ltevalue: value });
          break;
        }
        case 'gt': {
          query[andOr](`${sFieldName} > :gtvalue`, { gtvalue: value });
          break;
        }
        case 'gte': {
          query[andOr](`${sFieldName} >= :gtevalue`, { gtevalue: value });
          break;
        }
        case 'contains': {
          query[andOr](`${sFieldName} ILIKE :convalue`, {
            convalue: `%${value}%`
          });
          break;
        }
        case 'notContains': {
          query[andOr](`${sFieldName} NOT ILIKE :notconvalue`, {
            notconvalue: `%${value}%`
          });
          break;
        }
        case 'startsWith': {
          query[andOr](`${sFieldName} ILIKE :swvalue`, {
            swvalue: `${value}%`
          });
          break;
        }
        case 'notStartsWith': {
          query[andOr](`${sFieldName} NOT ILIKE :nswvalue`, {
            nswvalue: `${value}%`
          });
          break;
        }
        case 'endsWith': {
          query[andOr](`${sFieldName} ILIKE :ewvalue`, {
            ewvalue: `%${value}`
          });
          break;
        }
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
