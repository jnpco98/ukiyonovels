import {
  BaseEntity as ActiveRecordBaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BeforeInsert,
  PrimaryColumn,
  Generated
} from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import nanoid from 'nanoid';

/**
 * Base Entity
 * All orm entities must inherit form this class
 *
 * Base Graphql Object Type
 * All object types must inherit from this class
 *
 * Contains the base orm and object type properties
 *
 * Implements graphql validation
 */
@ObjectType({ isAbstract: true })
export abstract class BaseEntity extends ActiveRecordBaseEntity {
  @Field(type => ID, { name: 'id' })
  @PrimaryColumn({ name: 'entity_id', type: 'text' })
  id: string;

  /**
   * Auto incremented id,
   * used in conjunction with the cursors
   */
  @Generated('increment')
  @Column({ name: 'increment_id', type: 'integer' })
  incrementId: number;

  /**
   * Only assigned on create
   * Cannot be modified after it's been added
   * to the database
   */
  @Field()
  @CreateDateColumn({ name: 'created_at', type: 'timestamp', update: false })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'last_modified', type: 'timestamp' })
  lastModified: Date;

  /**
   * Id of the resource creator
   * Depends on the context
   *
   * Could be the novel uploader,
   * or the thread moderator,
   * or the comment/reviewer
   */
  @Column({ name: 'creator_id', nullable: true, type: 'text' })
  creatorId?: string;

  @Column({ type: 'boolean', default: false })
  archived: boolean;

  /**
   * Before inserting the entity into the
   * database, generate a nanoid
   */
  @BeforeInsert()
  generateUID() {
    this.id = nanoid();
  }
}
