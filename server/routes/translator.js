const router = require("express").Router();
const translatorController = require('../controllers/translatorController');
const fs = require("fs");

router.get("/", (req, res) => {
    const languageId = req.body.languageId
    res.json(translatorController.getLanguageTranslations(languageId))
});

module.exports = router;
