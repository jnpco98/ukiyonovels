import { Field, ObjectType, ID, InputType } from 'type-graphql';
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './entity';
import { Min, Max, IsOptional, Length } from 'class-validator';

@Entity()
@ObjectType()
@InputType('ReviewInput')
export class Review extends BaseEntity implements Partial<Review> {
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
  
  @Field(() => ID)
  @Column({ name: 'novel_id' })
  novelId: string;
}