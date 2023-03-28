const express = require("express");
const templatesController = require("../controllers/templates");
const verifyMiddleware = require("../middleware/verify");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
router.get("/tets", (req, res) => {
  try {
    res.status(200).send("Success!");
  } catch (error) {
    res.status(500).send(error);
    console.log();
  }
});

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
