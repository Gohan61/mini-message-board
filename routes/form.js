const express = require("express");
const router = express.Router();
const { messages } = require("./index");

router.get("/", (req, res, next) => {
  res.render("form");
});

router.post("/", (req, res, next) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
