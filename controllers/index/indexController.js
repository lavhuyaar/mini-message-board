const db = require("../../db/queries");

const getMessages = async (req, res) => {
  const messages = await db.getMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

const postMessage = async (req, res) => {
 await db.postMessage(
    req.body.name,
    req.body.message,
  );
  res.redirect("/");
};

const getUserMessage = async (req, res) => {
  const user = req.params.user;
  const userData = await db.getUserMessage(user);
  res.render("userMessage", {
    title: `${userData[0].username}'s message`,
    data: userData[0],
  });
};

module.exports = { getMessages, postMessage, getUserMessage };
