import { Column, Entity, BeforeInsert } from 'typeorm';
import { Field, InputType, ObjectType } from 'type-graphql';
import { IsIn, IsOptional, Length, Min, Max } from 'class-validator';

import { BaseEntity } from './entity';
import { slugify } from '../utilities/string/slugify';

/**
 * Valid novel types, checked in validation
 *
 * Will be moved to a database
 * to support expansion
 */
const origins = [
  'Web',
  'Light',
  'Chinese',
  'Filipino',
  'Korean',
  'Thai',
  'Malaysian',
  'Indonesia',
  'Vietnamese'
];
export const novelTypes = origins.map((origin) => `${origin} Novel`);

/**
 * Valid novel status, checked in validation
 *
 * Will be moved to a database
 * to support expansion
 */
export const novelStatus = ['Completed', 'Ongoing', 'Hiatus'];

@ObjectType()
export class NovelAggregate {
  @Field({ description: 'Consolidate novel fields', nullable: true })
  field: string;

  @Field({ description: 'Aggregating consolidated novel field count' })
  count: number;
}

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
  title: string;

  @Field({ nullable: true })
  @Column({ type: 'text', unique: true })
  slug: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  @Length(20, 10000, {
    message: 'Description should be between 20-10000 characters'
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
  @Field((returns) => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  tags?: string;

  /**
   * Comma separated genres
   * ex: "\"Genre1\",\"Genre2 with space\""
   */
  @Field((returns) => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  genres?: string;

  /**
   * Comma separated origins
   * ex: "\"Origin1\",\"Origin2 with space\""
   */
  @Field((returns) => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  origins?: string;

  /**
   * Comma separated authors
   * ex: "\"Author1\", \"Author2 with space\""
   */
  @Field((returns) => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  authors?: string;

  /**
   * Comma separated artists
   * ex: "\"Artist1\", \"Artist2 with space\""
   */
  @Field((returns) => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  artists?: string;

  /**
   * Comma separated related novels
   * - prequel, sequel, related universe
   * ex: "\"Related1\", \"Related2 with space\""
   */
  @Field((returns) => String, { nullable: true })
  @Column({ name: 'related_novels', type: 'text', nullable: true })
  @IsOptional()
  relatedNovels?: string;

  /**
   * Comma separated associated names
   * ex: "\"Recommended1\", \"Recommended2 with space\""
   */
  @Field((returns) => String, { nullable: true })
  @Column({ name: 'recommended_novels', type: 'text', nullable: true })
  @IsOptional()
  recommendedNovels?: string;

  /**
   * Comma separated associated names
   * - name in different languages, published name
   * ex: "\"Alternative1\", \"Alternative2 with space\""
   */
  @Field((returns) => String, { nullable: true })
  @Column({ name: 'alternative_names', type: 'text', nullable: true })
  @IsOptional()
  alternativeNames?: string;

  /**
   * Comma separated media gallery
   * Novel image collection
   * ex: "\"Media1\", \"Media2 with space\""
   */
  @Field((returns) => String, { nullable: true })
  @Column({ name: 'media_gallery', type: 'text', nullable: true })
  @IsOptional()
  mediaGallery?: string;

  /**
   * Featured image
   * ex: "Imageurl"
   */
  @Field((returns) => String, { nullable: true })
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

  /**
   * Calculated with the ff:
   *   Current value = 0.8 with 5 reviews
   *   New value = 0.9
   *   (0.8 * 5 + 0.9) / 6
   */
  @Field({ description: `Average rating based on reviews [0 - 1]`, nullable: true })
  @Column({ type: 'decimal', nullable: true })
  @IsOptional()
  @Min(0)
  @Max(1)
  rating: number;

  /**
   * Create slug on novel create
   */
  @BeforeInsert()
  createSlug() {
    this.slug = slugify(this.title);
  }
}
