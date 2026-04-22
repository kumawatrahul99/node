const mongoose = require("mongoose");

const productmodel = new mongoose.Schema(
  {
    title: String,
    brand: String,
    category: String,
    price: Number,
    stock: Number,
    rating: Number,
    reviews: Number,
    desc: String,
    image: String,
    features: [String],
    specifications: {
      RAM: String,
      Storage: String,
      Battery: String
    }
  },
  { timestamps: true },
);

const product = new mongoose.model("productdata", productmodel);

module.exports = product;
