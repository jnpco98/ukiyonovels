import { BaseEntity as ActiveRecordBaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from "typeorm";
import { ObjectType, ID, Field } from "type-graphql";

@ObjectType({ isAbstract: true })
export abstract class BaseEntity extends ActiveRecordBaseEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn({ name: 'entity_id' })
  id: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', update: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'last_modified', type: 'timestamp' })
  lastModified: Date;

  @Column({ name: 'creator_id', type: 'integer', nullable: true })
  creatorId: number;

  @Column({ type: 'boolean', default: false })
  archived: boolean;
}