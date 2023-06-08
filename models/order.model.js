const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  mealId: {
    type: Number,
    min: [5, "mealId shoul be minimum 5 character"],
    required: [true, "Must have a valid meal id"],
  },
  mealTitle: {
    type: String,
    min: [3, "minimum 3 characters long"],
    max: [50, "should not exceed 50 characters"],
    required: [true, "mealTitle is required"],
  },
  mealCatecory: {
    type: String,
    min: [3, "minimum 3 characters long"],
    max: [50, "should not exceed 50 characters"],
    required: [true, "mealCatecory is required"],
  },
  mealThumb: {
    type: String,
    min: [3, "minimum 3 characters long"],
    required: [true, "mealThumb url is required"],
  },
  mealTags: {
    type: [String],
    min: [3, "minimum 3 characters long"],
  },
  mealPrice: {
    type: Number,
    min: [2, "minimum 2"],
    required: [true, "mealPrice is required"],
  },
  mealQuantity: {
    type: Number,
    min: [1, "order quantity must be at least 1"],
    max: [2, "maximum limit reached"],
    required: [true, "mealQuantity is required"],
  },
  customerName: {
    type: String,
    min: [3, "minimum 3 characters long"],
    max: [100, "should not exceed 100 characters"],
  },
  customerEmail: {
    type: String,
    min: [3, "minimum 3 characters long"],
    max: [100, "should not exceed 100 characters"],
    required: [true, "customerEmail is required"],
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
