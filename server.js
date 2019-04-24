//1.
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes/rest");
require("dotenv").config();
const app = express();
app.use(express.static(path.join(__dirname, "client", "build")));

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(console.log("Connection Successful"));
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());
app.use("/rest", routes);
app.use("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Port Running on number ${port}`);
});
