import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Address from "./Address";
import { Cart } from "./Cart";
import Order from "./Order";

export enum Title {
  Mr,
  Mrs,
  Ms,
}

registerEnumType(Title, {
  name: "Title",
});

@Entity()
@ObjectType()
export default class User extends BaseEntity {
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

  @Field(() => Title)
  @Column()
  title: Title;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  phoneNumber: string;

  @Field()
  @Column({ default: false })
  isAdmin: boolean;

  @Field()
  @Column({ default: 0 })
  tokenVersion: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @Field(() => [Address])
  @OneToMany(() => Address, (address) => address.user)
  address: Address[];

  @Field(() => Cart)
  @OneToOne(() => Cart)
  cart: Cart;

  @Field(() => [Order])
  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
