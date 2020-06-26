import { Request, Response } from "express";

interface IUserRequest extends Request {
  user?: any;
}

export interface AppContext {
  req: IUserRequest;
  res: Response;
  payload?: { userId: string };
}
