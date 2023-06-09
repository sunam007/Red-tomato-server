const mongoose = require("mongoose");

function connectToDatabase() {
  const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-m6h1wqx-shard-00-00.rdmew3v.mongodb.net:27017,ac-m6h1wqx-shard-00-01.rdmew3v.mongodb.net:27017,ac-m6h1wqx-shard-00-02.rdmew3v.mongodb.net:27017/redTomato?ssl=true&replicaSet=atlas-ru88hx-shard-0&authSource=admin&retryWrites=true&w=majority`;

  const options = {
    dbName: "redTomato",
    useNewUrlParser: true,
  };

  mongoose
    .connect(uri, options)
    .then(() => console.log("Connected to MONGO DB successfully"))
    .catch((err) => console.log("Could not connect to DB", err));
}

module.exports = {
  connectToDatabase,
};
