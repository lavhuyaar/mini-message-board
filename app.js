const path = require("node:path");
const express = require("express");
const indexRoute = require("./routes/index/indexRoute");
const newRoute = require("./routes/new/newRoute");
const app = express();
const PORT = 3000;
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoute);
app.use("/new", newRoute);


app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}!`);
});
