const express = require("express");
const router = express.Router();
const { connectDB, contactsCollection } = require("../database");

// console.log("from contact.js", contactsCollection);
connectDB();

const initializeContacts = async () => {
  await connectDB();

  console.log("from inside the contact.js", contactsCollection);

  router.get("/", async (req, res) => {
    const query = {};
    const cursor = contactsCollection.find(query);
    const result = await cursor.toArray();
    console.log(result);
    res.send(result);
  });

  router.post("/", async (req, res) => {
    const payload = req.body;
    console.log(payload);
    const result = contactsCollection.insertOne(payload);
    res.send(result);
  });

  initializeContacts();
};
module.exports = router;
