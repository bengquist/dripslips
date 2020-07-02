import { Arg, Mutation, Resolver } from "type-graphql";
import Address from "../models/Address";
import User from "../models/User";
import AddAddressInput from "./inputs/AddAddressInput";

@Resolver(() => Address)
export default class AddressResolver {
  @Mutation(() => Address)
  async addAddress(@Arg("data") { userId, ...data }: AddAddressInput) {
    const user = await User.findOne({ where: { id: userId } });
    const address = Address.create({ ...data, user }).save();

    return address;
  }
}
