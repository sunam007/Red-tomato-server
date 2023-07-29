const Meal = require("../models/meal.model"); // mongoose schema
const express = require("express");
const router = express.Router();

router.get("/:category", (req, res) => {
  const category = req.params.category;
  console.log(category);

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
