import { InputType, Field, ClassType } from 'type-graphql';
import { WhereAndOrParams } from '../../lib/query/types/where-and-or';

export function createWhereInputType(
  name: string,
  ReturnType: ClassType<WhereAndOrParams>
): ClassType<WhereAndOrParams> {
  @InputType(`${name}Where`)
  class WhereInput implements WhereAndOrParams {
    @Field(type => [ReturnType], { nullable: true })
    AND?: [typeof ReturnType];

    @Field(type => [ReturnType], { nullable: true })
    OR?: [typeof ReturnType];
  }

  return WhereInput;
}
