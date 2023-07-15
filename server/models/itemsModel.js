const mongoose = require("mongoose");

// create schema
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  size: { type: String, required: true },
});

// create model
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
