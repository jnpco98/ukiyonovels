import { Field, ObjectType, ID, InputType } from 'type-graphql';
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './entity';
import { Length } from 'class-validator';

/**
 * ORM Comment Entity
 * 
 * Graphql Comment Object Type
 * 
 * Also being used as the mutation input type for
 * the Comment Object Type
 * 
 * Implements graphql validation
 */
@Entity()
@ObjectType()
@InputType('CommentInput')
export class Comment extends BaseEntity implements Partial<Comment> {
  @Field()
  @Column({ type: 'text' })
  @Length(20, 1000, { message: 'Content should be between 20-1000 characters' })
  content: string;

  @Field(() => ID)
  @Column({ name: 'chapter_id' })
  chapterId: string;
}
