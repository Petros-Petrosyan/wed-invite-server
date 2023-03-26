const express = require("express");
const authenticationController = require("../controllers/authentication");
const verifyMiddleware = require("../middleware/verify");

const router = express.Router();

router.post("/log-in", authenticationController.logIn);
router.post("/sign-up", authenticationController.signUp);
router.post("/sign-up-with-google", authenticationController.signUpWithGoogle);
router.put(
  "/change-password",
  verifyMiddleware,
  authenticationController.changePassword
);

module.exports = router;
