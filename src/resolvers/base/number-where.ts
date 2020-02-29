import { Field, InputType } from "type-graphql";

@InputType()
export class NumberWhere {
  @Field({ nullable: true })
  is?: Number;

  @Field({ nullable: true })
  not?: Number;
  
  @Field(type => [Number], { nullable: true })
  in?: [Number];
  
  @Field(type => [Number], { nullable: true })
  notIn?: [Number];
  
  @Field({ nullable: true })
  lt?: Number;
  
  @Field({ nullable: true })
  lte?: Number;
  
  @Field({ nullable: true })
  gt?: Number;
  
  @Field({ nullable: true })
  gte?: Number;
}