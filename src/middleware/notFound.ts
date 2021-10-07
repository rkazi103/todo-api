import { Request, Response } from "express";

export default function notFound(
  req: Request,
  res: Response
): Response<any, Record<string, any>> {
  return res.status(404).send("Route not found");
}
