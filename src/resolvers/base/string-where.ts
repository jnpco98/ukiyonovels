import { Field, InputType, ClassType } from "type-graphql";

export function createTypeWhere<T>(resource: string, ReturnType: ClassType<T>) {
  @InputType(`${resource}Where`)
  class TypeWhere {
    @Field({ nullable: true })
    is?: T;
  
    @Field({ nullable: true })
    not?: T;
    
    @Field(type => [ReturnType], { nullable: true })
    in?: [T];
    
    @Field(type => [ReturnType], { nullable: true })
    notIn?: [T];
    
    @Field({ nullable: true })
    lt?: T;
    
    @Field({ nullable: true })
    lte?: T;
    
    @Field({ nullable: true })
    gt?: T;
    
    @Field({ nullable: true })
    gte?: T;
    
    @Field({ nullable: true })
    contains?: T;
    
    @Field({ nullable: true })
    notContains?: T;
    
    @Field({ nullable: true })
    startsWith?: T;
    
    @Field({ nullable: true })
    notStartsWith?: T;
    
    @Field({ nullable: true })
    endsWith?: T;
    
    @Field({ nullable: true })
    notEndsWith?: T;
  }
}

@InputType()
export class StringWhere {
  @Field({ nullable: true })
  is?: String;

  @Field({ nullable: true })
  not?: String;
  
  @Field(type => [String], { nullable: true })
  in?: [String];
  
  @Field(type => [String], { nullable: true })
  notIn?: [String];
  
  @Field({ nullable: true })
  lt?: String;
  
  @Field({ nullable: true })
  lte?: String;
  
  @Field({ nullable: true })
  gt?: String;
  
  @Field({ nullable: true })
  gte?: String;
  
  @Field({ nullable: true })
  contains?: String;
  
  @Field({ nullable: true })
  notContains?: String;
  
  @Field({ nullable: true })
  startsWith?: String;
  
  @Field({ nullable: true })
  notStartsWith?: String;
  
  @Field({ nullable: true })
  endsWith?: String;
  
  @Field({ nullable: true })
  notEndsWith?: String;
}