const router = require("express").Router();
const translatorController = require("../controllers/translatorController");

router.get("/", (req, res) => {
  translatorController.getStandardTranslations(req, res);
});

router.get("/on-demand", (req, res) => {
  translatorController.getOnDemandTranslation(req, res);
});

module.exports = router;
