import {
  BaseEntity as ActiveRecordBaseEntity,
  BeforeInsert,
  Column,
  Generated,
  PrimaryColumn,
  BeforeUpdate
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

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
  @Field((type) => ID, { name: 'id' })
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
  @Column({ name: 'created_at', type: 'bigint', default: () => "cast(date_part('epoch', CURRENT_TIMESTAMP) as bigint)" })
  createdAt: number;

  @Field()
  @Column({ name: 'last_modified', type: 'bigint', default: () => "cast(date_part('epoch', CURRENT_TIMESTAMP) as bigint)" })
  lastModified: number;

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
  beforeInsert() {
    this.id = nanoid();
    this.createdAt = new Date().getTime();
    this.lastModified = new Date().getTime();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.lastModified = new Date().getTime();
  }
}
