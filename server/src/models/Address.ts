import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User";

@Entity()
@ObjectType()
export default class Address extends BaseEntity {
  @Field(() => User)
  @ManyToOne(() => User, (user) => user.address)
  user: User;

  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  companyName?: string;

  @Field()
  @Column()
  addressPrimary: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  addressSecondary?: string;

  @Field()
  @Column()
  postalCode: number;

  @Field()
  @Column()
  city: string;

  @Field()
  @Column()
  state: string;

  @Field()
  @Column()
  country: string;
}
