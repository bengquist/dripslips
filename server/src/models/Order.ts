import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User";

@Entity()
@ObjectType()
export default class Order extends BaseEntity {
  @Field(() => User)
  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  amount: number;

  @Field()
  @Column()
  status: string;

  @CreateDateColumn({ type: "timestamp" })
  created: Date;
}
