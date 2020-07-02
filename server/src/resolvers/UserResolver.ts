import { Arg, Query, Resolver } from "type-graphql";
import User from "../models/User";

@Resolver()
export default class UserResolver {
  @Query(() => User)
  user(@Arg("id") id: string) {
    return User.findOne({ where: { id }, relations: ["address", "orders"] });
  }
}
