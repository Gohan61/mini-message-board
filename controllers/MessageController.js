const db = require("../database/queries");

exports.getMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini message board", messages: messages });
};

exports.newMessage = async (req, res) => {
  await db.newMessage(req.body.message, req.body.author);
  res.redirect("/");
};
