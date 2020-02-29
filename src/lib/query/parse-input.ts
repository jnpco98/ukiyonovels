import { WhereExpression } from "typeorm";

export function parseInput<T extends { [key: string ]: any }>(query: WhereExpression, where: T, andOr: "andWhere" | "orWhere") {
  const whereArgs = Object.entries(where);

  whereArgs.map(whereArg => {
    const [fieldName, filters] = whereArg;
    const ops = Object.entries(filters);

    ops.map(parameters => {
      const [operation, value] = parameters;

      switch (operation) {
        case "is": {
          query[andOr](`${fieldName} = :isvalue`, { isvalue: value });
          break;
        }
        case "not": {
          query[andOr](`${fieldName} != :notvalue`, { notvalue: value });
          break;
        }
        case "in": {
          query[andOr](`${fieldName} IN :invalue`, { invalue: value });
          break;
        }
        case "notIn": {
          query[andOr](`${fieldName} NOT IN :notinvalue`, {
            notinvalue: value
          });
          break;
        }
        case "lt": {
          query[andOr](`${fieldName} < :ltvalue`, { ltvalue: value });
          break;
        }
        case "lte": {
          query[andOr](`${fieldName} <= :ltevalue`, { ltevalue: value });
          break;
        }
        case "gt": {
          query[andOr](`${fieldName} > :gtvalue`, { gtvalue: value });
          break;
        }
        case "gte": {
          query[andOr](`${fieldName} >= :gtevalue`, { gtevalue: value });
          break;
        }
        case "contains": {
          query[andOr](`${fieldName} ILIKE :convalue`, {
            convalue: `%${value}%`
          });
          break;
        }
        case "notContains": {
          query[andOr](`${fieldName} NOT ILIKE :notconvalue`, {
            notconvalue: `%${value}%`
          });
          break;
        }
        case "startsWith": {
          query[andOr](`${fieldName} ILIKE :swvalue`, {
            swvalue: `${value}%`
          });
          break;
        }
        case "notStartsWith": {
          query[andOr](`${fieldName} NOT ILIKE :nswvalue`, {
            nswvalue: `${value}%`
          });
          break;
        }
        case "endsWith": {
          query[andOr](`${fieldName} ILIKE :ewvalue`, {
            ewvalue: `%${value}`
          });
          break;
        }
        case "notEndsWith": {
          query[andOr](`${fieldName} ILIKE :newvalue`, {
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
};