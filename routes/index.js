const express = require("express");
const router = express.Router();
const message_controlller = require("../controllers/MessageController");

router.get("/", message_controlller.getMessages);

module.exports = router;
