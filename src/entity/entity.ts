import {
  BaseEntity as ActiveRecordBaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BeforeInsert,
  PrimaryColumn,
  Generated
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import nanoid from 'nanoid';

@ObjectType({ isAbstract: true })
export abstract class BaseEntity extends ActiveRecordBaseEntity {
  @Field(type => ID, { name: 'id' })
  @PrimaryColumn({ name: 'entity_id',type: 'varchar' })
  id: string;

  @Generated('increment')
  @Column({ name: 'increment_id', type: 'integer' })
  incrementId: number;

  @BeforeInsert()
  generateUID() {
    this.id = nanoid();
  }

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', update: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'last_modified', type: 'timestamp' })
  lastModified: Date;

  @Column({ name: 'creator_id', nullable: true, type:'varchar' })
  creatorId?: string;

  @Column({ type: 'boolean', default: false })
  archived: boolean;
}
