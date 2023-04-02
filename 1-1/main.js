import mongoose from "mongoose";
import Product from "./model/product.js";

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

const A = async () => {
  const products = await Product.find();
  console.log(products);
};

const B = async () => {
  const products = await Product.find().select("-_id");
  console.log(products);
};

const C = async () => {
  const products = await Product.find({ type: "Audio Album" });
  console.log(products);
};

const D = async () => {
  const products = await Product.find({
    "pricing.retail": { $lt: 5000 },
  });
  console.log(products);
};

const E = async () => {
  const products = await Product.find({
    type: { $ne: "Film" },
  });
  console.log(products);
};

const F = async () => {
  const products = await Product.find({
    "shipping.weight": { $gt: 15 },
  });
  console.log(products);
};

const G = async () => {
  const updatedProduct = await Product.findOneAndUpdate(
    {
      "details.title": "The Matrix",
    },
    { "pricing.list": 2500 },
    { new: true }
  );
  console.log(updatedProduct);
};

const H = async () => {
  const products = await Product.find({
    $and: [{ type: "Film" }, { "shipping.dimensions.depth": 1 }],
  });
  console.log(products);
};

const I = async () => {
  const products = await Product.count({ type: "Film" });
  console.log(products);
};

const J = async () => {
  const products = await Product.find({
    "details.writer": /Jonathan Nolan/i,
  });
  console.log(products);
};

const K = async () => {
  const product = await Product.findOne().sort({
    "pricing.savings": -1,
  });
  console.log(product);
};

const L = async () => {
  const products = await Product.find({ "details.title": /x/i });
  console.log(products);
};

const M = async () => {
  const product = await Product.findOneAndDelete({
    "details.aspect_ratio": "1.66:1",
  });
  console.log(product);
};

// await A();
// await B();
// await C();
// await D();
// await E();
// await F();
// await G();
// await H();
// await I();
// await J();
// await K();
// await L();
// await M();
