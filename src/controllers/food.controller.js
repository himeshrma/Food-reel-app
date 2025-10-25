const foodModel = require("../models/food.model");

async function createFood(req, res) {
  console.log(req.foodPartner);
  console.log(req.body);
  res.send("Food created successfully");
}

module.exports = { createFood };
