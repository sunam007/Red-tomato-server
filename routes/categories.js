const express = require("express");
const Category = require("../models/category.model"); // mongoose model
const router = express.Router();

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
