const Meal = require("../models/meal.model"); // mongoose schema
const express = require("express");
// const { connectToDatabase } = require("../mongo.config");
const router = express.Router();

// connectToDatabase();

router.get("/", async (req, res) => {
  try {
    const tag = req.query.mealTags;

    if (tag === "popular") {
      const popularMeals = await Meal.find({ mealTags: "popular" }).sort({
        mealTitle: 1,
      });
      return res.status(200).json({
        status: "success",
        count: popularMeals.length,
        data: popularMeals,
      });
    } else {
      const allMeals = await Meal.find();
      return res
        .status(200)
        .json({ status: "success", count: allMeals.length, data: allMeals });
    }
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ status: "fail", message: error.message });
  }
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const getMeal = async () => {
    try {
      const result = await Meal.find({ mealId: id });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

  getMeal();
});

module.exports = router;
