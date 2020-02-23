import { ObjectType, Field } from "type-graphql";
import { Entity, Column } from "typeorm";
import { BaseEntity } from "./entity";

@ObjectType()
@Entity()
export class AuthTokens extends BaseEntity {
  @Field()
  accessToken: string;

  @Field()
  @Column({ name: 'refresh_token', unique: true })
  refreshToken: string;
}