import express from "express";
import Joi from "joi";
import JoiObjectId from "joi-objectid";
import db from "./db/connection.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import employees from "./routes/employees.js";
//--------------------------------------------------------------------------
Joi.objectId = JoiObjectId(Joi);
const app = express();

// app.set("view engine", "pug");
// app.set("views", "./views");

app.use(express.json());

app.use("/api/employee", employees);

app.use(globalErrorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}...`);
});
