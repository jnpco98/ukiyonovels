import {
  BaseEntity as ActiveRecordBaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryColumn,
  BeforeInsert
} from 'typeorm';
import { ObjectType, ID, Field } from 'type-graphql';
import nanoid from 'nanoid';

@ObjectType({ isAbstract: true })
export abstract class BaseEntity extends ActiveRecordBaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'entity_id' })
  id: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', update: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'last_modified', type: 'timestamp' })
  lastModified: Date;

  @Column({ name: 'creator_id', nullable: true })
  creatorId?: string;

  @Column({ type: 'boolean', default: false })
  archived: boolean;

  @BeforeInsert()
  generateNanoId() {
    this.id = nanoid();
  }
}
