const express = require("express");
const router = express.Router();
const { ObjectID } = require("mongodb");
const { connectDB, ordersCollection } = require("../database");

const initializeOrders = async () => {
  await connectDB();

  router.get("/", async (req, res) => {
    const query = {};
    const cursor = ordersCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
  });

  router.post("/", async (req, res) => {
    const payload = req.body; // Corrected typo: req.res to req.body
    const result = await ordersCollection.insertOne(payload);
    res.send(result);
  });

  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const query = { _id: new ObjectID(id) };
    const result = await ordersCollection.deleteOne(query); // Corrected typo: deleOne to deleteOne
    res.send(result);
  });
};

initializeOrders();

module.exports = router;
