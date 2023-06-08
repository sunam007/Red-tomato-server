const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  mealId: {
    type: Number,
    min: [5, "mealId should be minimum 5 characters"],
    required: [true, "Must have a valid meal id"],
  },
  mealTitle: {
    type: String,
    minLength: [3, "mealTitle should be minimum 3 characters long"],
    maxLength: [50, "mealTitle should not exceed 50 characters"],
    required: [true, "mealTitle is required"],
  },
  mealCategory: {
    type: String,
    minLength: [3, "mealCategory should be minimum 3 characters long"],
    maxLength: [50, "mealCategory should not exceed 50 characters"],
    required: [true, "mealCategory is required"],
  },
  mealThumb: {
    type: String,
    minLength: [3, "mealThumb should be minimum 3 characters long"],
    required: [true, "mealThumb URL is required"],
  },
  mealTags: {
    type: [String],
    minLength: [3, "Each mealTag should be minimum 3 characters long"],
  },
  mealPrice: {
    type: Number,
    min: [2, "mealPrice should be minimum 2"],
    required: [true, "mealPrice is required"],
  },
  mealQuantity: {
    type: Number,
    min: [1, "Order quantity must be at least 1"],
    max: [2, "Maximum limit reached"],
    required: [true, "mealQuantity is required"],
  },
  customerName: {
    type: String,
    minLength: [3, "customerName should be minimum 3 characters long"],
    maxLength: [100, "customerName should not exceed 100 characters"],
  },
  customerEmail: {
    type: String,
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    ],
    minLength: [3, "customerEmail should be minimum 3 characters long"],
    maxLength: [100, "customerEmail should not exceed 100 characters"],
    required: [true, "customerEmail is required"],
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
