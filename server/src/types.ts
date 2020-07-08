import { Request, Response } from "express";
import User from "./models/User";

export interface AppContext {
  req: Request;
  res: Response;
  user?: User;
  payload?: { userId: string };
}
