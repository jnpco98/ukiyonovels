import { InputType, Field, ClassType } from 'type-graphql';
import { WhereAndOrParams } from '../../lib/query/types/where-and-or';
import { EntityQueryable } from '../../resolvers/base/types/resolver';
import { BaseEntity } from '../../entity/entity';
/**
 * @param name Where input type name to make it unique.
 * @param ReturnType
 */
export function createWhereInputType<T extends EntityQueryable<BaseEntity>>(
  name: string,
  ReturnType: ClassType<T>
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
