const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  status: Boolean,
});

module.exports = mongoose.model("products", productSchema);
