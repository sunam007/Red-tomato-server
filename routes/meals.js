const Meal = require("../models/meal"); // mongoose schema
const express = require("express");
const { connectToDatabase } = require("../mongo.config");
const router = express.Router();

connectToDatabase();

router.get("/", (req, res) => {
  const getMeals = async () => {
    try {
      const result = await Meal.find();
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
    }
  };

  getMeals();
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
