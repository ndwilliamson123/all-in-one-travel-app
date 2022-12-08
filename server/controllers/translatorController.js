const translatorModel = require("../models/translatorModel");

async function getStandardTranslations(req, res) {
  await translatorModel
    .getStandardTranslations(req.body.languageId)
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
  getStandardTranslations,
};
