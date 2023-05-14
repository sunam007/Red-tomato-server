const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./database");
const ordersRouter = require("./routes/orders");
const contactsRouter = require("./routes/contacts");
const bookingsRouter = require("./routes/bookings");
// const { ObjectId } = require("mongodb");
// const MongoClient = require("mongodb").MongoClient;

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

//Connect to the Database
connectDB();

//Routes
app.use("/orders", ordersRouter);
app.use("/contacts", contactsRouter);
app.use("/bookings", bookingsRouter);

// Root url
app.get("/", (req, res) => res.send("RED TOMATO Server is Running !!!!"));

//Start the server
app.listen(port, () => console.log("Listening on port", port));

// //MONGO Config
// const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-m6h1wqx-shard-00-00.rdmew3v.mongodb.net:27017,ac-m6h1wqx-shard-00-01.rdmew3v.mongodb.net:27017,ac-m6h1wqx-shard-00-02.rdmew3v.mongodb.net:27017/?ssl=true&replicaSet=atlas-ru88hx-shard-0&authSource=admin&retryWrites=true&w=majority`

// const client = new MongoClient(uri);

// const run = async () => {
//   try {
//     const ordersCollection = client.db("redTomato").collection("orders");
//     const contactsCollection = client.db("redTomato").collection("contacts");
//     const bookingsCollection = client.db("redTomato").collection("bookings");

// const query = {};

// //orders api

// app.get("/orders", async (req,res)=>{
//   const query = {} ;
//   const cursor = ordersCollection.find(query);
//   const result = await cursor.toArray()
//   res.send(result);
// })

// app.post("/orders", async (req, res) => {
//   const payload = req.body;
//   console.log(payload);
//   const result = await ordersCollection .insertOne(payload);
//   res.send(result);
// });

// app.delete("/orders/:id", async (req, res) => {
//   const id = req.params.id;
//   const query = { _id: new ObjectId(id) };
//   const result = await ordersCollection .deleteOne(query);
//   res.send(result);
// });

// // Contact Api

// app.get("/contacts", async(req,res)=>{
//   const query = {};
//   const cursor = contactsCollection.find(query);
//   const result = await cursor.toArray();
//   res.send(result);
// })

// app.post("/contacts" , async(req,res)=>{
//   const payload = req.body;
//   console.log(payload);
//   const result = await contactsCollection.insertOne(payload);
//   res.send(result);
// })

//     //Booking Api

//     app.get("/bookings",async(req,res)=>{
//       const query = {};
//       const cursor = bookingsCollection.find(query);
//       const result = await cursor.toArray();
//       res.send(result)

//     })

//     app.post("/bookings" , async(req,res)=>{
//       const payload = req.body;
//       console.log(payload);
//       const result = await bookingsCollection.insertOne(payload);
//       res.send(result);
//     })

//   } finally {
//   }
// };
// run().catch(console.dir);
