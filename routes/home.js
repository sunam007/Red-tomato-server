const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("RED-TOMATO SERVER IS RUNNING"));

module.exports = router;
