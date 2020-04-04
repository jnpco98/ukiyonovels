import { Field, ObjectType, ID, InputType } from 'type-graphql';
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './entity';
import { Min, Max, IsOptional, Length } from 'class-validator';

/**
 * ORM Review Entity
 *
 * Graphql Review Object Type
 *
 * Also being used as the mutation type for
 * the Review Object Type
 *
 * Implements graphql validation
 */
@Entity()
@ObjectType()
@InputType('ReviewInput')
export class Review extends BaseEntity implements Partial<Review> {
  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  @Length(20, 4000, { message: 'Content should be between 20-4000 characters' })
  @IsOptional()
  content?: string;

  @Field({ description: 'Rating: [0 - 1]', nullable: true })
  @Column({ type: 'decimal', nullable: true })
  @IsOptional()
  @Min(0)
  @Max(1)
  rating: number;

  @Field(() => ID)
  @Column({ name: 'novel_id' })
  novelId: string;
}
