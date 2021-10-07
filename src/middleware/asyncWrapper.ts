import { NextFunction, Request, RequestHandler, Response } from "express";

/**
 *
 * @param {Function} fn The express function that needs to be wrapped
 * @returns {Function} The express function fully wrapped
 */
export default function asyncWrapper(
  fn: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>
): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
