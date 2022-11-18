const translatorModel = require("../models/translatorModel");

async function getLanguageTranslations(req, res) {
  await translatorModel
    .getLanguageTranslations(req.body.languageId)
    .then((translationData) => {
      res.json(translationData);
    })
    .catch((error) => {
      res.status(500).json({
        error,
      });
    });
}

module.exports = {
  getLanguageTranslations,
};
