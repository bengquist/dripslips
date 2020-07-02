import { Field, InputType } from "type-graphql";
import Order, { OrderStatus } from "../../models/Order";

@InputType()
export default class CreateOrderInput implements Partial<Order> {
  @Field()
  addressId: string;

  @Field(() => OrderStatus)
  status: OrderStatus;
}
