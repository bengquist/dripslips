import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
@ObjectType()
export default class Order extends BaseEntity {
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
