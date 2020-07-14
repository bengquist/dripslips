import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CartItem } from "./CartItem";
import User from "./User";

@Entity()
@ObjectType()
export class Cart extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  count: number;

  @Field()
  total: number;

  @Field(() => User)
  @OneToOne(() => User)
  @JoinColumn()
  user: User;
  @Column({ nullable: true })
  userId: string;

  @Field(() => [CartItem])
  @OneToMany(() => CartItem, (items) => items.cart, {
    cascade: true,
  })
  items: CartItem[];
}
