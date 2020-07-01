import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Address from "./Address";
import { CartItem } from "./CartItem";

@Entity()
@ObjectType()
export default class User extends BaseEntity {
  @Field(() => [Address])
  @OneToMany(() => Address, (address) => address.user)
  address: Address[];

  @Field(() => [CartItem])
  @OneToMany(() => CartItem, (cartItem) => cartItem.user)
  cartItems: CartItem[];

  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Field()
  @Column({ nullable: true })
  phoneNumber: string;

  @Field()
  @Column({ default: false })
  isAdmin: boolean;

  @CreateDateColumn({ type: "timestamp" })
  created: Date;
}
