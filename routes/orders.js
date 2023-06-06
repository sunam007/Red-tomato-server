const Order = require("../models/order"); // mongoose schema
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

    if (meal) {
      res.status(404).send("requested meal already exists");

      return;
    } else {
      const postOrder = async () => {
        const order = new Order(payload);

        const result = await order.save();

        console.log(result);

        res.status(200).send(result);
      };

      postOrder();
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
