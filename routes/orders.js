const Order = require("../models/order.model"); // mongoose schema
const express = require("express");
// const { connectToDatabase } = require("../mongo.config");
const router = express.Router();

// connectToDatabase();

router.get("/", (req, res) => {
  const getOrders = async () => {
    try {
      const result = await Order.find();

      res.status(200).send(result);
    } catch (err) {
      console.log(err);
    }
  };

  getOrders();
});

router.get("/:email", (req, res) => {
  const email = req.params.email;

  const getOrders = async () => {
    try {
      const result = await Order.find({ customerEmail: email });

      res.status(200).send(result);
    } catch (err) {
      console.log(err);
    }
  };

  getOrders();
});

router.post("/", async (req, res) => {
  const payload = req.body;

  try {
    const meal = await Order.findById(payload._id);
    if (meal) return res.status(400).send("bad request");

    const order = new Order(payload);

    const result = await order.save();
    console.log(result);

    res.status(200).send(result);
  } catch (err) {
    for (const key in err.errors) {
      if (err.errors.hasOwnProperty(key)) {
        const error = err.errors[key];
        console.log(`Field: ${key}`);
        console.log(`Error Type: ${error.kind}`);
        console.log(`Error Path: ${error.path}`);
        console.log(`Error Value: ${error.value}`);
        console.log("---");
      }
    }

    res.sendStatus(500);
  }
});

module.exports = router;
