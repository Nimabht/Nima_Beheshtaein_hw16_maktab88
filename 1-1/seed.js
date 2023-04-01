const mongoose = require("mongoose");
const data = require("./data/products-data.json");
const Product = require("./model/product");

mongoose.connect("mongodb://localhost/HW16", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seed() {
  try {
    await Product.insertMany(data);
    console.log("Database seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
