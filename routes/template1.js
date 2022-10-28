const express = require("express");
const template1Controller = require("../controllers/template1");
const verifyMiddleware = require("../middleware/verify");
const router = express.Router();

router.get("/template1", verifyMiddleware, template1Controller.getTemplate1);
router.post("/template1", verifyMiddleware, template1Controller.addTemplate1);
router.put("/template1", verifyMiddleware, template1Controller.updateTemplate1);

module.exports = router;
