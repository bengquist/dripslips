import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Resolver,
  Root,
} from "type-graphql";
import Address from "../models/Address";
import { CartItem } from "../models/CartItem";
import Order from "../models/Order";
import OrderItem from "../models/OrderItem";
import { AppContext } from "../types";
import CreateOrderInput from "./inputs/CreateOrderInput";

@Resolver(() => Order)
export default class OrderResolver {
  @Mutation(() => Order)
  async createOrder(
    @Arg("data") data: CreateOrderInput,
    @Ctx() { user }: AppContext
  ) {
    let amount = 0;

    const cart = await CartItem.find({
      where: { user },
      relations: ["productDetails", "productDetails.product"],
    });
    const address = await Address.findOne(data.addressId);
    const order = Order.create({ status: data.status, address, user });
    const items = cart.map(({ productDetails, quantity }) => {
      amount += productDetails.product.price * quantity;
      return OrderItem.create({ productDetails, quantity });
    });

    order.amount = amount;
    order.items = items;

    return order.save();
  }

  @FieldResolver()
  async amount(@Root() order: Order): Promise<number> {
    let amount = 0;

    const orderItems = await OrderItem.find({
      where: { order },
      relations: ["productDetails", "productDetails.product"],
    });
    orderItems.forEach(
      (item) => (amount += item.productDetails.product.price * item.quantity)
    );

    return amount;
  }

  @FieldResolver()
  async address(@Root() order: Order): Promise<Address> {
    //@ts-ignore
    return Address.findOne(order.addressId);
  }

  @FieldResolver()
  async items(@Root() order: Order): Promise<OrderItem[]> {
    return OrderItem.find({ where: { order } });
  }
}
