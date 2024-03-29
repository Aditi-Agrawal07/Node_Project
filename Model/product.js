const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_Name: {
    type: String,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  product_image: {
    type: String,
  },
  Category: {
    type: String,
    enum: ["Organic Fruits", "Fresh Fruits", "Fresh Vegitable"],
  },
});

const product = mongoose.model("Product", productSchema);

module.exports = product;
