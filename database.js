const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

dotenv.config();

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-m6h1wqx-shard-00-00.rdmew3v.mongodb.net:27017,ac-m6h1wqx-shard-00-01.rdmew3v.mongodb.net:27017,ac-m6h1wqx-shard-00-02.rdmew3v.mongodb.net:27017/?ssl=true&replicaSet=atlas-ru88hx-shard-0&authSource=admin&retryWrites=true&w=majority`;

console.log(uri);

const client = new MongoClient(uri);

let ordersCollection;
let contactsCollection;
let bookingsCollection;

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Successfully Connected to DB");
    ordersCollection = client.db("redTomato").collection("orders");
    console.log("DB.js", ordersCollection);
    contactsCollection = client.db("redTomato").collection("contacts");
    // console.log("contact collection in database.js", contactsCollection);
    bookingsCollection = client.db("redTomato").collection("bookings");
    // console.log("DB.js", bookingsCollection);
  } catch (err) {
    console.error("Failed to connect to the database:", err);
  }
};

module.exports = {
  connectDB,
  ordersCollection,
  contactsCollection,
  bookingsCollection,
};
