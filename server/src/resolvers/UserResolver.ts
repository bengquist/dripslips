import { AuthenticationError } from "apollo-server-express";
import bcrypt from "bcrypt";
import { verify } from "jsonwebtoken";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import User from "../models/User";
import { AppContext } from "../types";
import {
  attachRefreshToken,
  createAccessToken,
  createRefreshToken,
} from "../utils/auth";
import SignupInput from "./inputs/SignupInput";
import { LoginResponse } from "./responses/LoginResponse";

@Resolver()
export default class UserResolver {
  @Query(() => User, { nullable: true })
  me(@Ctx() context: AppContext) {
    const authorization = context.req.headers["authorization"];

    if (!authorization) {
      return null;
    }

    try {
      const token = authorization?.split(" ")[1];
      const payload: any = verify(token, process.env.JWT_ACCESS_TOKEN_SECRET!);
      context.payload = payload as any;
      return User.findOne(payload.userId);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  @Query(() => User)
  user(@Arg("id") id: string) {
    return User.findOne({ where: { id }, relations: ["address", "orders"] });
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
      throw new AuthenticationError(
        "Could not find a user with that username or email"
      );
    }

    const isValidPassword = await bcrypt.compare(password, userData.password);

    if (!isValidPassword) {
      throw new AuthenticationError("Incorrect password");
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
      throw new AuthenticationError("Username is already taken");
    }
    if (userWithEmail) {
      throw new AuthenticationError("Email is already taken");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 12);

    try {
      await User.insert({
        ...userData,
        password: hashedPassword,
      });
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
}
