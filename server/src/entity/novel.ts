import { Field, ObjectType, InputType, ID } from 'type-graphql';
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './entity';
import { Length, IsOptional, IsIn } from 'class-validator';

/**
 * Valid novel types, checked in validation
 * 
 * Will be moved to a database
 * to support expansion
 */
export const novelTypes = ['Web Novel', 'Light Novel', 'Chinese Novel', 'Korean Novel'];

/**
 * Valid novel status, checked in validation
 * 
 * Will be moved to a database
 * to support expansion
 */
export const novelStatus = ['Complete', 'Ongoing', 'Hiatus'];

/**
 * ORM Novel Entity
 * 
 * Graphql Novel Object Type
 * 
 * Also being used as the mutation type for
 * the Book Object Type
 * 
 * Implements graphql validation
 */
@Entity()
@ObjectType()
@InputType('NovelInput')
export class Novel extends BaseEntity implements Partial<Novel> {
  @Field({ nullable: true })
  @Column({ type: 'text' })
  @Length(5, 150, { message: 'Title should be between 5-150 characters' })
  title: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  @Length(20, 1000, {
    message: 'Description should be between 20-1000 characters'
  })
  @IsOptional()
  description?: string;

  /**
   * Value should be one of the values 
   * specified above {novelTypes}
   */
  @Field({ description: `Types: [${novelTypes.join(', ')}]`, nullable: true })
  @Column({ type: 'text', default: novelTypes[0] })
  @IsIn(novelTypes)
  type: string;

  /**
   * Comma separated tags
   * ex: "\"Tag1\",\"Tag2 with space\""
   */
  @Field(returns => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  tags?: string;

  /**
   * Comma separated genres
   * ex: "\"Genre1\",\"Genre2 with space\""
   */
  @Field(returns => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  genres?: string;

  /**
   * Comma separated origins
   * ex: "\"Origin1\",\"Origin2 with space\""
   */
  @Field(returns => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  origins?: string;

  /**
   * Comma separated authors
   * ex: "\"Author1\", \"Author2 with space\""
   */
  @Field(returns => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  authors?: string;

  /**
   * Comma separated artists
   * ex: "\"Artist1\", \"Artist2 with space\""
   */
  @Field(returns => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  artists?: string;

  /**
   * Comma separated related novels
   * ex: "\"Related1\", \"Related2 with space\""
   */
  @Field(returns => String, { nullable: true })
  @Column({ name: 'related_novels', type: 'text', nullable: true })
  @IsOptional()
  relatedNovels?: string;

  /**
   * Comma separated associated names
   * ex: "\"Associated1\", \"Associcated2 with space\""
   */
  @Field(returns => String, { nullable: true })
  @Column({ name: 'associated_names', type: 'text', nullable: true })
  @IsOptional()
  associatedNames?: string;
  
  /**
   * Comma separated media gallery
   * Novel image collection
   * ex: "\"Media1\", \"Media2 with space\""
   */
  @Field(returns => String, { nullable: true })
  @Column({ name: 'media_gallery', type: 'text', nullable: true })
  @IsOptional()
  mediaGallery?: string;
  
  /**
   * Featured image
   * ex: "Imageurl"
   */
  @Field(returns => String, { nullable: true })
  @Column({ name: 'cover_image', type: 'text', nullable: true })
  @IsOptional()
  coverImage?: string;

  /**
   * Number of likes
   */
  @Field({
    description: 'Likes: (not related to novel ratings)',
    nullable: true
  })
  @Column({ type: 'integer', default: 0 })
  likes?: number;

  /**
   * Controller number of views
   * Not auto incremented
   * 
   * Implementation is based on the frontend
   */
  @Field({ description: 'Total Views: (controlled increment)', nullable: true })
  @Column({ type: 'integer', default: 0 })
  views?: number;

  /**
   * Publish date
   * ex: 2000
   */
  @Field({ nullable: true })
  @Column({ type: 'integer', nullable: true })
  year?: number;

  /**
   * Value should be one of the values 
   * specified above {novelStatus}
   */
  @Field({ description: `Types: [${novelStatus.join(', ')}]`, nullable: true })
  @Column({ type: 'text', default: novelStatus[0] })
  @IsIn(novelStatus)
  status?: string;
}
