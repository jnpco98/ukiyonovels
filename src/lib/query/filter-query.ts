import { Brackets, SelectQueryBuilder } from "typeorm";
import { WhereAndOrParams } from "./types/where-and-or";
import { parseInput } from "./parse-input";

export function filterQuery<T, U extends WhereAndOrParams>(query: SelectQueryBuilder<T>, where: U) {
  if (!where) {
    return query;
  }

  Object.keys(where).forEach(key => {
    if (key === "OR") {
      query.andWhere(
        new Brackets(qb =>
          where[key]!.map(queryArray => {
            parseInput(qb, queryArray, "orWhere");
          })
        )
      );
    } else if (key === "AND") {
      query.andWhere(
        new Brackets(qb =>
          where[key]!.map(queryArray => {
            parseInput(qb, queryArray, "andWhere");
          })
        )
      );
    }
  });

  return query;
};