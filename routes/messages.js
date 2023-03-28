const express = require("express");
const messagesController = require("../controllers/messages");
const verifyMiddleware = require("../middleware/verify");
const router = express.Router();

router.get("/messages", verifyMiddleware, messagesController.getMessages);
router.post("/messages", messagesController.addMessages);

module.exports = router;
