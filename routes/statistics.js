const express = require("express");
const statisticsController = require("../controllers/statistics");
const verifyAdminMiddleware = require("../middleware/verifyAdmin");
const router = express.Router();

router.get(
  "/coffeeCount",
  verifyAdminMiddleware,
  statisticsController.getCoffeeCount
);
router.post("/coffeeCount", statisticsController.addCoffeeCount);

module.exports = router;
