const express = require("express");
const cors = require("cors");
require("dotenv").config();
const home = require("./routes/home");
const meals = require("./routes/meals");
const mealsByCategory = require("./routes/mealsByCategory");
const categories = require("./routes/categories");
const orders = require("./routes/orders");
const { connectToDatabase } = require("./mongo.config");

const app = express();
connectToDatabase();

// middle-wares
app.use(cors());
app.use(express.json());

//routers
app.use("/", home);
app.use("/api/meals/", meals);
app.use("/api/categories", categories);
app.use("/api/filter/", mealsByCategory);
app.use("/api/orders/", orders);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Listening on port: ", port));
