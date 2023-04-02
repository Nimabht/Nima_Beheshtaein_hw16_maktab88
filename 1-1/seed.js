import mongoose from "mongoose";
import Product from "./model/product.js";
import data from "./data/products-data.json" assert { type: "json" };

await mongoose
  .connect("mongodb://localhost:27017/HW16", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

try {
  await Product.deleteMany();
  await Product.insertMany(data);
  console.log("Database seeded");
  process.exit();
} catch (err) {
  console.error(err);
  process.exit(1);
}
