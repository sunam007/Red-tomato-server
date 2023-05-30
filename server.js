const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const home = require("./routes/home");
const { connectToDatabase } = require("./mongo.config.js"); //mongodb config
const Meal = require("./models/meal"); // mongoose schema

const app = express();

// middle-wares
app.use(cors());
app.use(express.json());

//routers
app.use("/", home);

//db connection
connectToDatabase();

async function getMeals() {
  const meals = await Meal.find().or([
    { mealPrice: { $lte: 100 } },
    { mealTitle: /.*ml.*/i },
  ]);
  console.log(`total ${meals.length} meals found: `, meals);
}

getMeals();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Listening on", port));
