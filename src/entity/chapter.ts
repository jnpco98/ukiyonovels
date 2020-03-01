import { Field, ObjectType, ID, InputType } from 'type-graphql';
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './entity';
import { Length, IsOptional, MinLength } from 'class-validator';

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
  
  @Field(type => ID)
  @Column({ name: 'book_id' })
  bookId: string;
}