import { Field, ObjectType } from 'type-graphql';
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './entity';
import { Length, IsOptional, IsIn, ArrayUnique } from 'class-validator';

const novelTypes = ['Web Novel', 'Light Novel', 'Chinese Novel', 'Korean Novel']

@Entity()
@ObjectType()
export class Novel extends BaseEntity {
  @Field()
  @Column({ type: 'text' })
  @Length(5, 40, { message: 'Title should be between 5-40 characters' })
  title: string;
  
  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  @Length(20, 1000, { message: 'Description should be between 20-1000 characters' })
  @IsOptional()
  description?: string;

  @Field({ description: `Types: [${novelTypes.join(', ')}]` })
  @Column({ type: 'text', default: 'Web Novel' })
  @IsIn(novelTypes)
  type: string;

  @Field(returns => [String], { nullable: true })
  @Column({ type: 'text', array: true, nullable: true })
  @ArrayUnique()
  @IsOptional()
  tags?: string[];

  @Field(returns => [String], { nullable: true })
  @Column({ type: 'text', array: true, nullable: true })
  @ArrayUnique()
  @IsOptional()
  genres?: string[];

  @Field(returns => [String], { nullable: true })
  @Column({ type: 'text', array: true, nullable: true })
  @ArrayUnique()
  @IsOptional()
  origins?: string[];

  @Field(returns => [String], { nullable: true })
  @Column({ type: 'text', array: true, nullable: true })
  @ArrayUnique()
  @IsOptional()
  authors?: string[];

  @Field(returns => [String], { nullable: true })
  @Column({ type: 'text', array: true, nullable: true })
  @ArrayUnique()
  @IsOptional()
  artists?: string[];

  @Field(returns => [String], { nullable: true })
  @Column({ name: 'related_novels', type: 'text', array: true, nullable: true })
  @ArrayUnique()
  @IsOptional()
  relatedNovels?: string[];

  @Field(returns => [String], { nullable: true })
  @Column({ name: 'associated_names', type: 'text', array: true, nullable: true })
  @ArrayUnique()
  @IsOptional()
  associatedNames?: string[];

  @Field(returns => [String], { nullable: true })
  @Column({ name: 'media_gallery', type: 'text', array: true, nullable: true })
  @ArrayUnique()
  @IsOptional()
  mediaGallery?: string[];
 
  @Field(returns => [String], { nullable: true })
  @Column({ name: 'cover_image', type: 'text', array: true, nullable: true })
  @ArrayUnique()
  @IsOptional()
  coverImage?: string[];

  @Field({ description: 'Likes: (not related to novel ratings)' })
  @Column({ type: 'integer', default: 0 })
  likes: number;

  @Field({ description: 'Total Views: (controlled increment)' })
  @Column({ type: 'integer', default: 0 })
  views: number;
}