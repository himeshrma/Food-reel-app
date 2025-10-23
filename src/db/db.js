const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect("mongodb://localhost:27017/Food-reel-app")
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
}
module.exports = connectDB;
