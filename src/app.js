//App.js me creates Server and connects to Database

const express = require("express");

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

const cookieParser = require("cookie-parser");

app.use(cookieParser()); // Middleware to parse cookies

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
