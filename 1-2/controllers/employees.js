import { isValidObjectId } from "../validator/ObjectId.js";
import { Employee, validateEmployee } from "../models/employee.js";
import AppError from "../utils/appError.js";

export const getEmployees = async (req, res, next) => {
  const employees = await Employee.find()
    .sort({ lastname: -1 })
    .select("-__v");
  res.send(employees);
};

export const getEmployeeById = async (req, res, next) => {
  res.send(req.employee);
};

export const createEmployee = async (req, res, next) => {
  const { error, value } = validateEmployee(req.body);
  if (!!error) {
    const ex = new AppError(error.details[0].message, "fail", 400);
    return next(ex);
  }
  // Check if phone number already exists in database
  let existingEmployee = await Employee.exists({
    phoneNumber: value.phoneNumber,
  });
  if (existingEmployee) {
    const ex = new AppError("Use another phone number.", "fail", 400);
    return next(ex);
  }
  // Check if numberId already exists in database
  existingEmployee = await Employee.exists({
    idNumber: value.idNumber,
  });
  if (existingEmployee) {
    const ex = new AppError("Use another ID number.", "fail", 400);
    return next(ex);
  }
  const employee = new Employee(value);
  await employee.save();
  res.status(201).send(employee);
};

export const updateEmployee = async (req, res, next) => {
  const { error, value } = validateEmployee(req.body);
  if (!!error) {
    const ex = new AppError(error.details[0].message, "fail", 400);
    return next(ex);
  }
  // Check if phone number already exists in database
  let existingEmployee = await Employee.exists({
    phoneNumber: value.phoneNumber,
    _id: { $ne: req.employee._id }, // exclude employee with specified id
  });
  if (existingEmployee) {
    const ex = new AppError("Use another phone number.", "fail", 400);
    return next(ex);
  }
  // Check if numberId already exists in database
  existingEmployee = await Employee.exists({
    idNumber: value.idNumber,
    _id: { $ne: req.employee._id }, // exclude employee with specified id
  });
  if (existingEmployee) {
    const ex = new AppError("Use another ID number.", "fail", 400);
    return next(ex);
  }
  const employee = req.employee;
  employee.set(value);
  await employee.save();
  res.send(employee);
};

export const deleteEmployee = async (req, res, next) => {
  if (!isValidObjectId(req.params.id)) {
    const ex = new AppError("Invalid Id", "fail", 400);
    return next(ex);
  }
  const employee = await Employee.findByIdAndDelete(req.params.id);
  if (!employee) {
    const ex = new AppError("Employee not found", "fail", 404);
    return next(ex);
  }
  res.status(200).send("Employee deleted successfully");
};
