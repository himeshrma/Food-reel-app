const express = require("express");
const router = express.Router();

const foodPartnerController = require("../controllers/food-partner.controller");
const authMiddleware = require("../middlewares/auth.middleware");

console.log("✅ Debug check:");
console.log(
  "typeof authMiddleware.authUserMiddleware =>",
  typeof authMiddleware.authUserMiddleware
);
console.log(
  "typeof foodPartnerController.getFoodPartnerById =>",
  typeof foodPartnerController.getFoodPartnerById
);

router.get(
  "/:id",
  authMiddleware.authUserMiddleWare,
  foodPartnerController.getFoodPartnerById
);

module.exports = router;
