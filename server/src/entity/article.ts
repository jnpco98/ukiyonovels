import { BeforeInsert, Column, Entity } from 'typeorm';
import { Field, InputType, ObjectType } from 'type-graphql';
import { IsOptional, Length } from 'class-validator';

import { BaseEntity } from './entity';
import { slugify } from '../utilities/string/slugify';

/**
 * ORM Article Entity
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
@InputType('ArticleInput')
export class Article extends BaseEntity implements Partial<Article> {
  @Field()
  @Column({ type: 'text' })
  @Length(10, 100, { message: 'Title should be between 10-100 characters' })
  title: string;

  @Field({ nullable: true })
  @Column({ type: 'text', unique: true })
  slug: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  @Length(50, 80000, { message: 'Content should be between 50-80000 characters' })
  @IsOptional()
  content?: string;

  /**
   * Create slug on book create
   */
  @BeforeInsert()
  createSlug() {
    this.slug = slugify(this.title);
  }
}
