import { Arg, Mutation, Resolver } from "type-graphql";
import Address from "../models/Address";
import User from "../models/User";
import AddUserAddressInput from "./inputs/AddUserAddressInput";

@Resolver()
export default class UserResolver {
  @Mutation(() => Address)
  async addUserAddress(@Arg("data") { userId, ...data }: AddUserAddressInput) {
    const user = await User.findOne({ where: { id: userId } });
    const address = Address.create({ ...data, user }).save();

    return address;
  }
}
