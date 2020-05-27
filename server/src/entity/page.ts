import { Column, Entity } from 'typeorm';
import { Field, InputType, ObjectType } from 'type-graphql';
import { Length } from 'class-validator';

import { BaseEntity } from './entity';

/**
 * ORM Page Entity
 *
 * Graphql Page Object Type
 *
 * Also being used as the mutation input type for
 * the Page Object Type
 *
 * Implements graphql validation
 */
@Entity()
@ObjectType()
@InputType('PageInput')
export class Page extends BaseEntity implements Partial<Page> {
  @Field()
  @Column({ type: 'text' })
  @Length(20, 100, { message: 'Title should be between 20-100 characters' })
  title: string;

  @Field()
  @Column({ type: 'text' })
  @Length(100, 10000, { message: 'Content should be between 100-10000 characters' })
  content: string;
}
