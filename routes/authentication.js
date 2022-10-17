const express = require("express");
const authenticationController = require("../controllers/authentication");

const router = express.Router();

router.post("/log-in", authenticationController.logIn);
router.post("/sign-up", authenticationController.signUp);

module.exports = router;
