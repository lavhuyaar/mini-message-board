const express = require("express");
const {
  getMessages,
  postMessage,
  getUserMessage,
} = require("../../controllers/index/indexController");

const indexRoute = express.Router();

indexRoute.get("/", getMessages);
indexRoute.post("/new", postMessage);
indexRoute.get('/message/:user', getUserMessage)

module.exports = indexRoute;
