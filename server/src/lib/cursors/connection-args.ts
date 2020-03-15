import { ArgsType, Field } from 'type-graphql';
import { getPagination } from './get-pagination';

/**
 * Arguments that must be provided
 * when paginating a connection
 */
@ArgsType()
export class ConnectionArgs {
  /**
   * Returns the elements that comes
   * before the specified cursor
   */
  @Field(() => String, {
    description: 'Returns the elements that come before the specified cursor',
    nullable: true
  })
  before?: string;

  /**
   * Returns the elements that comes
   * after the specified cursor
   */
  @Field(() => String, {
    description: 'Returns the elements that come after the specified cursor',
    nullable: true
  })
  after?: string;

  /**
   * Returns up to the first
   * n elements from the list
   */
  @Field({
    description: 'Returns up to the first n elements from the list',
    nullable: true
  })
  first?: number;

  /**
   * Returns up to the last
   * n elements from the list
   */
  @Field({
    description: 'Returns up to the last n elements from the list',
    nullable: true
  })
  last?: number;

  /**
   * Reverses the sorting of elements
   * 
   * ex: 
   * In a set of 10 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   * params:
   *  - first 2 after 5 will return 6 & 7
   *  - reverse will return 7 & 6
   *  
   *  - last 2 before 5 will return 4 & 3
   *  - reverse wil return 3 & 4
   */
  @Field({ nullable: true, description: 'Reverse the order of the list' })
  reverse?: boolean;

  /**
   * Sort list by an Entity type property
   * Checks if the property has a corresponding
   * database property
   * If not, throws an InvalidSortKeyError
   */
  @Field({ nullable: true, description: 'Sort list by the given key' })
  sortKey?: string;

  get pagination() {
    return getPagination(this);
  }
}
