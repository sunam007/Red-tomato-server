const express = require("express");
const cors = require("cors");
const { ObjectId } = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middle-wares
app.use(cors());
app.use(express.json());

//MONGO Config
const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-m6h1wqx-shard-00-00.rdmew3v.mongodb.net:27017,ac-m6h1wqx-shard-00-01.rdmew3v.mongodb.net:27017,ac-m6h1wqx-shard-00-02.rdmew3v.mongodb.net:27017/?ssl=true&replicaSet=atlas-ru88hx-shard-0&authSource=admin&retryWrites=true&w=majority`;

const client = new MongoClient(uri);

const run = async () => {
  try {
    const ordersCollection = client.db("redTomato").collection("orders");
    const contactsCollection = client.db("redTomato").collection("contacts");
    const bookingsCollection = client.db("redTomato").collection("bookings");

    // orders API

    app.get("/orders", async (req, res) => {
      const query = {};
      const cursor = ordersCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post("/orders", async (req, res) => {
      const payload = req.body;
      console.log(payload);
      const result = await ordersCollection.insertOne(payload);
      res.send(result);
    });

    app.delete("/orders/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await ordersCollection.deleteOne(query);
      res.send(result);
    });

    // contacts API

    app.get("/", async (req, res) => {
      const query = {};
      const cursor = contactsCollection.find(query);
      const result = await cursor.toArray();
      console.log(result);
      res.send(result);
    });

    app.post("/", async (req, res) => {
      const payload = req.body;
      console.log(payload);
      const result = contactsCollection.insertOne(payload);
      res.send(result);
    });

    // bookings API

    app.get("/bookings", async (req, res) => {
      const query = {};
      const cursor = bookingsCollection.find(query);
      const result = await cursor.toArray();
      console.log(result);
      res.send(result);
    });

    app.post("/bookings", async (req, res) => {
      const payload = req.body;
      console.log(payload);
      const result = bookingsCollection.insertOne(payload);
      res.send(result);
    });
  } finally {
  }
};

run().catch(console.dir);

// root
app.get("/", (req, res) => res.send("RED TOMATO Server is Running !!!!"));
app.listen(port, () => console.log("listening to port", port));
