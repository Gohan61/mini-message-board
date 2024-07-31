const express = require("express");
const router = express.Router();
const { messages } = require("./index");
const message_controlller = require("../controllers/MessageController");

router.get("/", (req, res, next) => {
  res.render("form");
});

router.post("/", message_controlller.newMessage);

module.exports = router;
