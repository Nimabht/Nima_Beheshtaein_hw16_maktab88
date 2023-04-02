import AppError from "../utils/appError.js";

export default function asyncMiddleware(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      const ex = new AppError(error.message, "error", 500);
      return next(ex);
    }
  };
}
