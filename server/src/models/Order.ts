import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Address from "./Address";
import OrderItem from "./OrderItem";
import User from "./User";

export enum OrderStatus {
  Pending,
  Completed,
}

registerEnumType(OrderStatus, {
  name: "OrderStatus",
});

@Entity()
@ObjectType()
export default class Order extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  amount: number;

  @Field(() => OrderStatus)
  @Column({ default: OrderStatus.Pending })
  status: OrderStatus;

  @CreateDateColumn({ type: "timestamp" })
  created: Date;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @Field(() => Address)
  @ManyToOne(() => Address, (address) => address.orders)
  address: Address;
  @Column()
  addressId: string;

  @Field(() => [OrderItem])
  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true })
  items: OrderItem[];
}
