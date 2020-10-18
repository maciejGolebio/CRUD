const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/model");

db.sequelize.sync()

app.get("/", (req, res) => {
  res.json({ status:200, body: "hello from crud" });
});

require("./app/routs/chessplayers.routs")(app);

module.exports = app