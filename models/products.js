const mongoose = require("mongoose");

const flowerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, multipleOf: 0.01, required: true },
  qty: { type: Number, isInt: true, minimum: 0, required: true },
  tags: { type: String, required: true },
});

const Flower = mongoose.model("Flower", flowerSchema);

module.exports = Flower;
