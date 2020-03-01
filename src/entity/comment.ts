import { Field, ObjectType, ID, InputType } from 'type-graphql';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './entity';
import { Length } from 'class-validator';
import { Chapter } from './chapter';

@Entity()
@ObjectType()
@InputType('CommentInput')
export class Comment extends BaseEntity implements Partial<Comment> {
  @Field()
  @Column({ type: 'text' })
  @Length(20, 1000, { message: 'Content should be between 20-1000 characters' })
  content: string;
  
  @Column({ name: 'chapter_id' })
  chapterId: string;
  @ManyToOne(() => Chapter, chapter => chapter.comments)
  @JoinColumn({ name: 'chapter_id' })
  chapter: Chapter;
}