import { Field, ObjectType, ID, InputType } from 'type-graphql';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './entity';
import { Length, IsOptional, MinLength } from 'class-validator';
import { Novel } from './novel';
import { Book } from './book';
import { Comment } from './comment';

@Entity()
@ObjectType()
@InputType('ChapterInput')
export class Chapter extends BaseEntity implements Partial<Chapter> {
  @Field()
  @Column({ type: 'text' })
  @Length(10, 50, { message: 'Title should be between 10-50 characters' })
  title: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  @MinLength(20, { message: 'Content should be longer than 20 characters' })
  @IsOptional()
  content?: string;
  
  @Field(type => ID)
  @Column({ name: 'novel_id' })
  novelId: string;
  @ManyToOne(() => Novel, novel => novel.chapters)
  @JoinColumn({ name: 'novel_id' })
  novel: Novel;
  
  @Field(type => ID, { nullable: true })
  @Column({ name: 'book_id', nullable: true })
  bookId?: string;
  @ManyToOne(() => Book, book => book.chapters)
  @JoinColumn({ name: 'book_id' })
  book?: Book;

  @Field(() => [Comment], { nullable: true })
  @OneToMany(() => Comment, comment => comment.chapter, { lazy: true })
  comments: Promise<Comment[]>;
}