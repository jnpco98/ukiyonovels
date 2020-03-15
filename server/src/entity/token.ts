import { ObjectType, Field } from 'type-graphql';
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './entity';

/**
 * ORM Refresh Token Entity
 * 
 * Graphql Auth tokens Object Type
 * 
 * Refresh tokens are stored in the database
 * and is used to generate access tokens
 */
@ObjectType()
@Entity()
export class AuthTokens extends BaseEntity {
  @Field()
  accessToken: string;

  @Field()
  @Column({ name: 'refresh_token', unique: true })
  refreshToken: string;
}
