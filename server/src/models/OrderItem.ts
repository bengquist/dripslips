import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Order from "./Order";
import ProductDetail from "./ProductDetail";

@Entity()
@ObjectType()
export default class OrderItem extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  quantity: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;
  @Column({ nullable: true })
  orderId: string;

  @Field(() => ProductDetail)
  @OneToOne(() => ProductDetail)
  @JoinColumn()
  productDetails: ProductDetail;
  @Column()
  productDetailsId: string;
}
