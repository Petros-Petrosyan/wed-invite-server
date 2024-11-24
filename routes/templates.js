const express = require("express");
const templatesController = require("../controllers/templates");
const verifyMiddleware = require("../middleware/verify");
const router = express.Router();

router.get("/templates/url", templatesController.getTemplateByUrl);
router.get("/templates", verifyMiddleware, templatesController.getTemplates);
router.post("/templates", verifyMiddleware, templatesController.addTemplates);
router.put("/templates", verifyMiddleware, templatesController.updateTemplates);
router.delete(
  "/templates",
  verifyMiddleware,
  templatesController.deleteTemplates
);
router.get(
  "/templates/key",
  verifyMiddleware,
  templatesController.getTemplateKey
);
module.exports = router;
