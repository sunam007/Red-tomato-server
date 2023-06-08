const express = require("express");
// const { connectToDatabase } = require("../mongo.config");
const Category = require("../models/category.model"); // mongoose schema

const router = express.Router();

// connectToDatabase();

router.get("/", (req, res) => {
  const getCategories = async () => {
    try {
      const result = await Category.find();
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
    }
  };

  getCategories();
});

module.exports = router;
