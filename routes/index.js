const express = require("express");
const router = express.Router();
const message_controlller = require("../controllers/MessageController");

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ];

/* GET home page. */
router.get("/", message_controlller.getMessages);

module.exports = router;
