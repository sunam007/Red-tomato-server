const express = require("express");
const router = express.Router();
const { ObjectID } = require("mongodb");
const { connectDB, bookingsCollection } = require("../database");

const initializeBookings = async () => {
  await connectDB();

  router.get("/", async (req, res) => {
    try {
      const query = {};
      const cursor = bookingsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    } catch (error) {
      console.error("Error retrieving bookings:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  router.post("/", async (req, res) => {
    try {
      const payload = req.body;
      const result = await bookingsCollection.insertOne(payload);
      res.send(result);
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const query = { _id: new ObjectID(id) };
      const result = await bookingsCollection.deleteOne(query);
      res.send(result);
    } catch (error) {
      console.error("Error deleting booking:", error);
      res.status(500).send("Internal Server Error");
    }
  });
};

initializeBookings();

module.exports = router;
