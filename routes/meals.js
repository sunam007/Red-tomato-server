const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("something");
});

module.exports = router;
