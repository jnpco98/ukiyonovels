import { Field, InputType } from 'type-graphql';

import { WhereFilterParams } from './types/where-filter';

/**
 * Creates a set of input type arguments
 * used for filtering string types
 */
@InputType()
export class StringWhere implements WhereFilterParams {
  @Field((type) => String, { nullable: true })
  is?: String;

  @Field((type) => String, { nullable: true })
  not?: String;

  @Field((type) => [String], { nullable: true })
  in?: [String];

  @Field((type) => [String], { nullable: true })
  notIn?: [String];

  @Field((type) => String, { nullable: true })
  lt?: String;

  @Field((type) => String, { nullable: true })
  lte?: String;

  @Field((type) => String, { nullable: true })
  gt?: String;

  @Field((type) => String, { nullable: true })
  gte?: String;

  @Field((type) => String, { nullable: true })
  contains?: String;

  @Field((type) => String, { nullable: true })
  notContains?: String;

  @Field((type) => String, { nullable: true })
  startsWith?: String;

  @Field((type) => String, { nullable: true })
  notStartsWith?: String;

  @Field((type) => String, { nullable: true })
  endsWith?: String;

  @Field((type) => String, { nullable: true })
  notEndsWith?: String;

  @Field((type) => String, { nullable: true })
  search?: String;
}

/**
 * Creates a set of input type arguments
 * used for filtering number types
 */
@InputType()
export class NumberWhere implements WhereFilterParams {
  @Field((type) => Number, { nullable: true })
  is?: Number;

  @Field((type) => Number, { nullable: true })
  not?: Number;

  @Field((type) => [Number], { nullable: true })
  in?: [Number];

  @Field((type) => [Number], { nullable: true })
  notIn?: [Number];

  @Field((type) => Number, { nullable: true })
  lt?: Number;

  @Field((type) => Number, { nullable: true })
  lte?: Number;

  @Field((type) => Number, { nullable: true })
  gt?: Number;

  @Field((type) => Number, { nullable: true })
  gte?: Number;
}
