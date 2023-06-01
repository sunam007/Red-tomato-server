const Order = require("../models/order"); // mongoose schema
const express = require("express");
const { connectToDatabase } = require("../mongo.config");
const router = express.Router();

connectToDatabase();

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

router.post("/", (req, res) => {
  const payload = req.body;

  const postOrder = async () => {
    const order = new Order(payload);

    const result = await order.save();

    res.send(result);
  };

  postOrder();
});

module.exports = router;
