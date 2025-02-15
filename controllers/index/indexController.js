const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getMessages = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

const postMessage = (req, res) => {
  messages.push({
    user: req.body.name,
    text: req.body.message,
    added: new Date(),
  });
  res.redirect("/");
};

const getUserMessage = (req, res) => {
  const user = req.params.user;
  const userData = messages.find((data) => data.user === user);
  res.render("userMessage", {title: `${userData.user}'s message`,  data: userData });
};

module.exports = { getMessages, postMessage, getUserMessage };
