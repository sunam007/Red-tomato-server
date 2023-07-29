const Order = require("../models/order.model"); // mongoose model
const express = require("express");
const router = express.Router();

// http://localhost:5000/api/orders

router.get("/", (req, res) => {
  const customerEmail = req.query;

  const getOrders = async () => {
    try {
      const result = await Order.find(customerEmail);

      res
        .status(200)
        .json({ status: "success", count: result.length, data: { result } });
    } catch (err) {
      res.status(404).json({ status: "fail", message: err.message });
    }
  };

  getOrders();
});

router.post("/", (req, res) => {
  const payload = req.body;
  console.log(payload);

  const createOrder = async () => {
    try {
      const existingOrder = await Order.findOne({
        mealId: payload.mealId,
        customerEmail: payload.customerEmail,
      });

      if (existingOrder) {
        existingOrder.mealQuantity =
          existingOrder.mealQuantity + payload.mealQuantity;
        await existingOrder.save();
        res
          .status(200)
          .json({ status: "success", data: { order: existingOrder } });
      } else {
        const order = await Order.create(payload);
        res.status(201).json({ status: "success", data: { order } });
      }
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ status: "fail", message: error.message });
    }
  };

  createOrder();
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  const deleteOrder = async () => {
    try {
      await Order.findByIdAndDelete(id);

      res.status(204).json({ status: "success", data: null });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ status: "fail", message: error.message });
    }
  };

  deleteOrder();
});

module.exports = router;
