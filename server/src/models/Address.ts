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
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.address)
  user: User;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column({ nullable: true })
  companyName: string;

  @Field()
  @Column()
  addressPrimary: string;

  @Field()
  @Column()
  addressSecondary: string;

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
