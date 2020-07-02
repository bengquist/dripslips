import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
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
      relations: ["productDetails"],
    });
    const address = await Address.findOne(data.addressId);
    const order = Order.create({ status: data.status, address, user });
    const items = cart.map(({ productDetails, quantity }) =>
      OrderItem.create({ productDetails, quantity })
    );

    order.amount = amount;
    order.items = items;

    return order.save();
  }
}
