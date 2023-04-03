import AppError from "./../utils/appError.js";
import { Employee } from "./../models/employee.js";
import { isValidObjectId } from "../validator/ObjectId.js";

export default async function getEmployee(req, res, next) {
  try {
    if (!isValidObjectId(req.params.id)) {
      const ex = new AppError("Invalid Id", "fail", 400);
      return next(ex);
    }
    const employee = await Employee.findById(req.params.id).select(
      "-__v"
    );
    if (!employee) {
      const ex = new AppError("Employee not found", "fail", 404);
      return next(ex);
    }
    req.employee = employee;
    next();
  } catch (error) {
    const ex = new AppError(error.message, "error", 500);
    return next(ex);
  }
}
