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
  @Column("varchar", { unique: true })
  username: string;

  @Field()
  @Column("varchar", { unique: true })
  email: string;

  @Column()
  password: string;

  @Field()
  @Column()
  phoneNumber: string;

  @CreateDateColumn({ type: "timestamp" })
  created: Date;
}
