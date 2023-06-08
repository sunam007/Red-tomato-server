const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealSchema = new Schema({
  mealId: Number,
  mealTitle: String,
  mealCatecory: String,
  mealThumb: String,
  mealTags: [String],
  mealPrice: Number,
  mealQuantity: Number,
});

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
