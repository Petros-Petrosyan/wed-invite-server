const express = require("express");
const templatesController = require("../controllers/templates");
const verifyMiddleware = require("../middleware/verify");
const verifyAdminMiddleware = require("../middleware/verifyAdmin");
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

router.get(
  "/all/templates",
  verifyAdminMiddleware,
  templatesController.getAllTemplates
);

router.delete(
  "/user/template",
  verifyAdminMiddleware,
  templatesController.deleteUserTemplates
);
module.exports = router;
