const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect("" + process.env.MONGODB_URI + "")
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
}
module.exports = connectDB;
