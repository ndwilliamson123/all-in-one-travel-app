const router = require("express").Router();
const translatorController = require("../controllers/translatorController");

router.get("/", (req, res) => {
  translatorController.getLanguageTranslations(req, res);
});

module.exports = router;
