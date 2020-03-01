import { Field, ObjectType, ID, InputType } from 'type-graphql';
import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './entity';
import { IsISBN, IsOptional, Length } from 'class-validator';
import { Chapter } from './chapter';
import { Novel } from './novel';

@Entity()
@ObjectType()
@InputType('BookInput')
export class Book extends BaseEntity implements Partial<Book> {
  @Field()
  @Column({ type: 'text' })
  @Length(10, 50, { message: 'Title should be between 10-50 characters' })
  title: string;
  
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
  
  @Column({ name: 'novel_id' })
  novelId: string;
  @ManyToOne(() => Novel, novel => novel.books)
  @JoinColumn({ name: 'novel_id' })
  novel: Novel;

  @Field(() => [Chapter], { nullable: true })
  @OneToMany(() => Chapter, chapter => chapter.book, { lazy: true })
  chapters: Promise<Chapter[]>;
}