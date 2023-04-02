import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/HW16-employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

export default mongoose.connection;
