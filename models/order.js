const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  mealId: Number,
  mealTitle: String,
  mealCatecory: String,
  mealThumb: String,
  mealTags: [String],
  mealPrice: Number,
  mealQuantity: Number,
  customerName: String,
  customerEmail: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
