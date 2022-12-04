const router = require("express").Router();
const translatorController = require("../controllers/translatorController");

router.get("/", (req, res) => {
  translatorController.getStandardTranslations(req, res);
});

module.exports = router;
