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

  console.log("payload from order.js", payload);

  let error;

  try {
    const meal = await Order.findById(payload._id);

    if (meal) {
      res.status(400).send("requested meal already exists");

      return;
    } else {
      const postOrder = async () => {
        const order = new Order(payload);

        await order.save();

        // console.log(result);

        // res.status(200).send(result);
        res.status(200);
      };

      postOrder();
    }
  } catch (err) {
    error = err;
    console.errorrs("this err is from order.js", error);
  }
});

module.exports = router;
