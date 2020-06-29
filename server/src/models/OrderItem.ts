import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Order from "./Order";
import ProductDetail from "./ProductDetail";

@Entity()
@ObjectType()
export default class OrderItem extends BaseEntity {
  @Field(() => Order)
  @ManyToOne(() => Order)
  order: Order;

  @Field(() => ProductDetail)
  @ManyToOne(() => ProductDetail)
  productDetails: ProductDetail;

  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  quantity: number;
}
