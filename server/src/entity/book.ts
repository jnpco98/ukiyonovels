import { Field, ObjectType, InputType, ID } from 'type-graphql';
import { Entity, Column, BeforeInsert } from 'typeorm';
import { BaseEntity } from './entity';
import { IsISBN, IsOptional, Length } from 'class-validator';
import { slugify } from '../utilities/string/slugify';

/**
 * ORM Book Entity
 *
 * Graphql Book Object Type
 *
 * Also being used as the mutation input type for
 * the Book Object Type
 *
 * Implements graphql validation
 */
@Entity()
@ObjectType()
@InputType('BookInput')
export class Book extends BaseEntity implements Partial<Book> {
  @Field()
  @Column({ type: 'text' })
  @Length(10, 50, { message: 'Title should be between 10-50 characters' })
  title: string;

  @Field({ nullable: true })
  @Column({ type: 'text', unique: true })
  slug: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  @Length(20, 5000, { message: 'Content should be between 20-5000 characters' })
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsISBN()
  @IsOptional()
  isbn?: string;

  @Field(() => ID)
  @Column({ name: 'novel_id' })
  novelId: string;

  /**
   * Create slug on book create
   */
  @BeforeInsert()
  createSlug() {
    this.slug = slugify(this.title);
  }
}
