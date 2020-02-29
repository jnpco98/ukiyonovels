import { Field, InputType, ClassType } from "type-graphql";

export function createTypeWhere<T>(resource: string, ReturnType: ClassType<T>) {
  @InputType(`${resource}Where`, { isAbstract: true })
  abstract class TypeWhere {
    @Field(type => ReturnType, { nullable: true })
    is?: T;
  
    @Field(type => ReturnType, { nullable: true })
    not?: T;
    
    @Field(type => [ReturnType], { nullable: true })
    in?: [T];
    
    @Field(type => [ReturnType], { nullable: true })
    notIn?: [T];
    
    @Field(type => ReturnType, { nullable: true })
    lt?: T;
    
    @Field(type => ReturnType, { nullable: true })
    lte?: T;
    
    @Field(type => ReturnType, { nullable: true })
    gt?: T;
    
    @Field(type => ReturnType, { nullable: true })
    gte?: T;
    
    @Field(type => ReturnType, { nullable: true })
    contains?: T;
    
    @Field(type => ReturnType, { nullable: true })
    notContains?: T;
    
    @Field(type => ReturnType, { nullable: true })
    startsWith?: T;
    
    @Field(type => ReturnType, { nullable: true })
    notStartsWith?: T;
    
    @Field(type => ReturnType, { nullable: true })
    endsWith?: T;
    
    @Field(type => ReturnType, { nullable: true })
    notEndsWith?: T;
  }

  return TypeWhere;
}

export const StringWhere = createTypeWhere('String', String);
export const NumberWhere = createTypeWhere('Number', Number)