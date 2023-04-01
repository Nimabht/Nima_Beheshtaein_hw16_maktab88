const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Audio Album", "Film"],
    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  shipping: {
    weight: {
      type: Number,
    },
    dimensions: {
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
      depth: {
        type: Number,
      },
    },
  },
  pricing: {
    list: {
      type: Number,
    },
    retail: {
      type: Number,
    },
    savings: {
      type: Number,
    },
    pct_savings: {
      type: Number,
    },
  },
  details: {
    title: {
      type: String,
    },
    artist: {
      type: String,
    },
    genre: [
      {
        type: String,
      },
    ],
    tracks: [
      {
        type: String,
      },
    ],
    director: [
      {
        type: String,
      },
    ],
    writer: [
      {
        type: String,
      },
    ],
    aspect_ratio: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
