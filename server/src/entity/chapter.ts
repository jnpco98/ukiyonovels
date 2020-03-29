import { Field, ObjectType, ID, InputType } from 'type-graphql';
import { Entity, Column, BeforeInsert } from 'typeorm';
import { BaseEntity } from './entity';
import { Length, IsOptional, MinLength } from 'class-validator';
import { slugify } from '../utilities/string/slugify';

/**
 * ORM Chapter Entity
 *
 * Graphql Chapter Object Type
 *
 * Also being used as the mutation type for
 * the Chapter Object Type
 *
 * Implements graphql validation
 */
@Entity()
@ObjectType()
@InputType('ChapterInput')
export class Chapter extends BaseEntity implements Partial<Chapter> {
  @Field()
  @Column({ type: 'text' })
  @Length(10, 50, { message: 'Title should be between 10-50 characters' })
  title: string;

  @Field({ nullable: true })
  @Column({ type: 'text', unique: true })
  slug: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  @MinLength(20, { message: 'Content should be longer than 20 characters' })
  @IsOptional()
  content?: string;

  @Field(type => ID)
  @Column({ name: 'novel_id' })
  novelId: string;

  @Field(type => ID, { nullable: true })
  @Column({ name: 'book_id', nullable: true })
  bookId?: string;

  /**
   * Create slug on chapter create
   */
  @BeforeInsert()
  createSlug() {
    this.slug = slugify(this.title);
  }
}
