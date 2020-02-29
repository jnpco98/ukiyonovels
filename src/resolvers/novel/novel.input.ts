import { InputType, Field } from "type-graphql";
import { StringWhere } from '../base/string-where';
import { NumberWhere } from '../base/number-where';
import { SelectQueryBuilder, Brackets, WhereExpression } from "typeorm";

@InputType()
export class NovelWhereInput {
  @Field(type => [NovelWhereInput], { nullable: true })
  AND?: [NovelWhereInput];

  @Field(type => [NovelWhereInput], { nullable: true })
  OR?: [NovelWhereInput];

  @Field({ nullable: true })
  title?: StringWhere;

  @Field({ nullable: true })
  description?: StringWhere;

  @Field({ nullable: true })
  type?: StringWhere;

  @Field({ nullable: true })
  tags?: StringWhere;

  @Field({ nullable: true })
  genres?: StringWhere;

  @Field({ nullable: true })
  origins?: StringWhere;

  @Field({ nullable: true })
  authors?: StringWhere;

  @Field({ nullable: true })
  artists?: StringWhere;

  @Field({ nullable: true })
  relatedNovels?: StringWhere;

  @Field({ nullable: true })
  associatedNames?: StringWhere;

  @Field({ nullable: true })
  likes?: NumberWhere;

  @Field({ nullable: true })
  views?: NumberWhere;
}



const handleArgs = (
  query: WhereExpression,
  where: NovelWhereInput,
  andOr: "andWhere" | "orWhere"
) => {
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

export const filterQuery = <T>(query: SelectQueryBuilder<T>, where: NovelWhereInput) => {
  if (!where) {
    return query;
  }

  Object.keys(where).forEach(key => {
    if (key === "OR") {
      query.andWhere(
        new Brackets(qb =>
          where[key]!.map(queryArray => {
            handleArgs(qb, queryArray, "orWhere");
          })
        )
      );
    } else if (key === "AND") {
      query.andWhere(
        new Brackets(qb =>
          where[key]!.map(queryArray => {
            handleArgs(qb, queryArray, "andWhere");
          })
        )
      );
    }
  });

  return query;
};