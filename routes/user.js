const express = require("express");
const userController = require("../controllers/user");
const verifyMiddleware = require("../middleware/verify");

const router = express.Router();

router.put("/onboarding", verifyMiddleware, userController.onboarding);
router.get("/user", verifyMiddleware, userController.user);
router.put("/update-language", verifyMiddleware, userController.updateLanguage);

module.exports = router;
