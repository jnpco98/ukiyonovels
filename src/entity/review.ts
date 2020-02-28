import { Field, ObjectType, ID } from 'type-graphql';
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './entity';
import { Min, Max, IsOptional, Length } from 'class-validator';

@Entity()
@ObjectType()
export class Review extends BaseEntity {
  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  @Length(20, 1000, { message: 'Content should be between 20-1000 characters' })
  @IsOptional()
  content?: string;
  
  @Field({ description: 'Rating: [0 - 1]' })
  @Column({ type: 'decimal', default: 1 })
  @Min(0)
  @Max(1)
  rating: number;
  
  @Field(type => ID)
  @Column({ name: 'novel_id', type: 'integer' })
  novelId: string;
}