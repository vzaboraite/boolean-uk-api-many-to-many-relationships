const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Working!!!");

  res.json({ doctor: true });
});

module.exports = router;
