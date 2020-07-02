import { Response } from "express";
import { sign } from "jsonwebtoken";
import User from "../models/User";

const { JWT_ACCESS_TOKEN_SECRET, JWT_REFRESH_TOKEN_SECRET } = process.env;

export const createAccessToken = (userId: string) => {
  return sign({ userId }, JWT_ACCESS_TOKEN_SECRET!, { expiresIn: "10d" });
};

export const createRefreshToken = (user: User) => {
  return sign({ userId: user.id }, JWT_REFRESH_TOKEN_SECRET!, {
    expiresIn: "365d",
  });
};

export const attachRefreshToken = (res: Response, token: string) => {
  res.cookie("token", token, { httpOnly: true, path: "/refresh_token" });
};
