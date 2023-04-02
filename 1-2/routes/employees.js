import express from "express";
import asyncMiddleware from "../middlewares/async.js";
import {
  getEmployeeById,
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employees.js";
import getEmployee from "../middlewares/getEmployee.js";

const router = express.Router();

router.get("/", asyncMiddleware(getEmployees));
router.get("/:id", getEmployee, asyncMiddleware(getEmployeeById));
router.post("/", asyncMiddleware(createEmployee));
router.put("/:id", getEmployee, asyncMiddleware(updateEmployee));
router.delete("/:id", asyncMiddleware(deleteEmployee));
export default router;
