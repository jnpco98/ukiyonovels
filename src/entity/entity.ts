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
import { toGlobalId } from 'graphql-relay';
import nanoid from 'nanoid';

@ObjectType({ isAbstract: true })
export abstract class BaseEntity extends ActiveRecordBaseEntity {
  @Field({ name: 'id' })
  @PrimaryColumn({ name: 'entity_id' })
  id: string;

  @Generated('increment')
  @Column({ name: 'increment_id' })
  incrementId: number;

  @BeforeInsert()
  generateUID() {
    this.id = nanoid();
  }

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', update: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'last_modified', type: 'timestamp' })
  lastModified: Date;

  @Column({ name: 'creator_id', nullable: true })
  creatorId?: string;

  @Column({ type: 'boolean', default: false })
  archived: boolean;

  abstract get objectType(): string;

  @Field(type => ID, { name: 'cursor' })
  get relayId(): string {
    return toGlobalId(this.objectType, 
      JSON.stringify({ 
        id: this.incrementId
      })
    );
  }
}
