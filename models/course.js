const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryTitle: String,
  CategoryId: Number,
  categoryThumb: String,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
