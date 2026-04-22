const mongoose = require("mongoose");

const productsmodel = new mongoose.Schema(
  {
 
    title: String,
    desc: String,
    price: Number,
    stock: Number,
    brand: String,
    rating: Number,
    image: String,
    category: String,

    keywords: [String],
    tags: [String],
    features: [String],

    metadata: {
      count: Number,
      updated: Date,
      description: String,
    },
  slug: {
      type: String,
      unique: true,
      index: true,   
      required: true 
    },
  },
  
  { timestamps: true }
);

module.exports = mongoose.model("productsdata", productsmodel);