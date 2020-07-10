import { UserInputError } from "apollo-server-express";
import bcrypt from "bcrypt";
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import Address from "../models/Address";
import { Cart } from "../models/Cart";
import Order from "../models/Order";
import User from "../models/User";
import { AppContext } from "../types";
import {
  attachRefreshToken,
  createAccessToken,
  createRefreshToken,
} from "../utils/auth";
import SignupInput from "./inputs/SignupInput";
import { LoginResponse } from "./responses/LoginResponse";

@Resolver(() => User)
export default class AuthResolver {
  @Query(() => User, { nullable: true })
  me(@Ctx() { user }: AppContext) {
    return user;
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg("user") user: string,
    @Arg("password") password: string,
    @Ctx() { res }: AppContext
  ): Promise<LoginResponse> {
    const userData = await User.findOne({
      where: [{ username: user }, { email: user }],
    });

    if (!userData) {
      throw new UserInputError(
        "Could not find a user with that username or email"
      );
    }

    const isValidPassword = await bcrypt.compare(password, userData.password);

    if (!isValidPassword) {
      throw new UserInputError("Incorrect password");
    }

    attachRefreshToken(res, createRefreshToken(userData));

    return { accessToken: createAccessToken(userData.id) };
  }

  @Mutation(() => Boolean)
  async signup(@Arg("data") userData: SignupInput) {
    const userWithUsername = await User.findOne({
      username: userData.username,
    });
    const userWithEmail = await User.findOne({ email: userData.email });

    if (userWithUsername) {
      throw new UserInputError("Username is already taken");
    }
    if (userWithEmail) {
      throw new UserInputError("Email is already taken");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 12);

    try {
      const user = await User.create({
        ...userData,
        password: hashedPassword,
      });

      await user.save();
      const cart = await Cart.create({ user });
      await cart.save();
    } catch (err) {
      console.error(err);
      return false;
    }

    return true;
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { res }: AppContext) {
    attachRefreshToken(res, "");

    return true;
  }

  @FieldResolver()
  async orders(@Root() user: User): Promise<Order[]> {
    return Order.find({ where: { user } });
  }

  @FieldResolver()
  async address(@Root() user: User): Promise<Address[]> {
    return Address.find({ where: { user } });
  }

  @FieldResolver()
  async cart(@Root() user: User): Promise<Cart> {
    const cart = await Cart.findOne({ where: { user } });

    if (!cart) {
      throw new Error("No cart found");
    }

    return cart;
  }
}
