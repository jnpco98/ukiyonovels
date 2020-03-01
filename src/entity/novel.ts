import { Field, ObjectType, InputType } from 'type-graphql';
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './entity';
import { Length, IsOptional, IsIn } from 'class-validator';
import { Chapter } from './chapter';
import { Book } from './book';
import { Review } from './review';

export const novelTypes = [
  'Web Novel', 
  'Light Novel', 
  'Chinese Novel', 
  'Korean Novel'
];

@Entity()
@ObjectType()
@InputType('NovelInput')
export class Novel extends BaseEntity implements Partial<Novel> {
  @Field()
  @Column({ type: 'text' })
  @Length(5, 40, { message: 'Title should be between 5-40 characters' })
  title: string;
  
  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  @Length(20, 1000, { message: 'Description should be between 20-1000 characters' })
  @IsOptional()
  description?: string;

  @Column({ type: 'text', default: novelTypes[0] })
  @Field({ description: `Types: [${novelTypes.join(', ')}]`, nullable: true })
  @IsIn(novelTypes)
  type: string;

  @Field(returns => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  tags?: string;

  @Field(returns => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  genres?: string;

  @Field(returns => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  origins?: string;

  @Field(returns => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  authors?: string;

  @Field(returns => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  artists?: string;

  @Field(returns => String, { nullable: true })
  @Column({ name: 'related_novels', type: 'text', nullable: true })
  @IsOptional()
  relatedNovels?: string;

  @Field(returns => String, { nullable: true })
  @Column({ name: 'associated_names', type: 'text', nullable: true })
  @IsOptional()
  associatedNames?: string;

  @Field(returns => String, { nullable: true })
  @Column({ name: 'media_gallery', type: 'text', nullable: true })
  @IsOptional()
  mediaGallery?: string;
 
  @Field(returns => String, { nullable: true })
  @Column({ name: 'cover_image', type: 'text', nullable: true })
  @IsOptional()
  coverImage?: string;

  @Field({ description: 'Likes: (not related to novel ratings)', nullable: true })
  @Column({ type: 'integer', default: 0 })
  likes?: number;

  @Field({ description: 'Total Views: (controlled increment)', nullable: true })
  @Column({ type: 'integer', default: 0 })
  views?: number;

  @Field(() => [Book], { nullable: true })
  @OneToMany(() => Book, book => book.novel, { lazy: true })
  books: Promise<Book[]>;

  @Field(() => [Chapter], { nullable: true })
  @OneToMany(() => Chapter, chapter => chapter.novel, { lazy: true })
  chapters: Promise<Chapter[]>;

  @Field(() => [Review], { nullable: true })
  @OneToMany(() => Review, review => review.novel, { lazy: true })
  reviews: Promise<Review[]>;
}