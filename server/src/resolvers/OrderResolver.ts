import { Arg, Mutation, Resolver } from "type-graphql";
import Address from "../models/Address";
import Order from "../models/Order";
import User from "../models/User";
import CreateOrderInput from "./inputs/CreateOrderInput";

@Resolver(() => Order)
export default class OrderResolver {
  @Mutation(() => Address)
  async createOrder(@Arg("data") { userId, ...data }: CreateOrderInput) {
    const user = await User.findOne({ where: { id: userId } });
    const address = Address.create({ ...data, user }).save();

    return address;
  }
}
