import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Resolver,
  Root,
} from "type-graphql";
import Address from "../models/Address";
import { Cart } from "../models/Cart";
import Order from "../models/Order";
import OrderItem from "../models/OrderItem";
import { AppContext } from "../types";
import CreateOrderInput from "./inputs/CreateOrderInput";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

@Resolver(() => Order)
export default class OrderResolver {
  @Mutation(() => Order)
  async createOrder(
    @Arg("data") data: CreateOrderInput,
    @Ctx() { user }: AppContext
  ) {
    let amount = 0;

    const cart = await Cart.findOne({
      where: { user },
      relations: [
        "items",
        "items.productDetails",
        "items.productDetails.product",
      ],
    });

    const address = await Address.findOne(data.addressId);
    const order = Order.create({ status: data.status, address, user });

    const items = cart?.items.map(({ productDetails, quantity }) => {
      amount += productDetails.product.price * quantity;
      return OrderItem.create({ productDetails, quantity });
    });

    order.amount = amount;
    order.items = items || [];

    if (!cart) {
      throw new Error("No items in cart");
    }

    try {
      const charge = await stripe.charges.create({
        amount,
        currency: "usd",
        source: data.stripeSource,
        receipt_email: user?.email || data.email,
      });

      console.log(charge);
    } catch (e) {
      throw new Error(e.message);
    }

    await Cart.delete(cart.id);

    return order.save();
  }

  @FieldResolver()
  async address(@Root() order: Order): Promise<Address> {
    const address = await Address.findOne(order.addressId);

    if (!address) {
      throw new Error("No address found connected to this order");
    }

    return address;
  }

  @FieldResolver()
  async items(@Root() order: Order): Promise<OrderItem[]> {
    return OrderItem.find({ where: { order } });
  }
}
