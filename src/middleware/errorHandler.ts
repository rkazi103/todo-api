import { NextFunction, Request, Response } from "express";
import { CustomAPIError } from "../errors/CutomAPIError";

export default function errorHandlerMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof CustomAPIError)
    return res.status(err.getStatusCode()).json({ msg: err.message });

  return res.status(500).json({ msg: "Something went wrong" });
}
