import { Field, InputType } from "type-graphql";
import Order, { OrderStatus } from "../../models/Order";
import OrderItem from "../../models/OrderItem";

@InputType()
export default class CreateOrderInput implements Partial<Order> {
  @Field()
  userId: string;

  @Field()
  addressId: string;

  @Field(() => [OrderItem])
  items: OrderItem[];

  @Field()
  amount: number;

  @Field(() => OrderStatus)
  status: OrderStatus;
}
