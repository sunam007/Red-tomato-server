const Meal = require("../models/category.model"); // mongoose schema
const express = require("express");
// const { connectToDatabase } = require("../mongo.config");
const router = express.Router();

// connectToDatabase();

router.get("/:category", (req, res) => {
  const category = req.params.category;

  const getMealsByCategory = async () => {
    try {
      const result = await Meal.find({ mealCategory: category });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

  getMealsByCategory();
});

module.exports = router;
