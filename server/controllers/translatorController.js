require("dotenv").config();
const translatorModel = require("../models/translatorModel");
const axios = require("axios");
const googleTranslateApiKey = process.env.GOOGLE_TRANSLATE_API_KEY;

function getStandardTranslations(req, res) {
  translatorModel
    .getLanguageIdFromCountryId(req.query.countryId)
    .then((languageId) => {
      translatorModel
        .getStandardTranslations(languageId)
        .then((translationData) => {
          res.json(translationData);
        })
        .catch((error) => {
          res.status(500).json({
            error,
          });
        });
    });
}

function getOnDemandTranslation(req, res) {
  translatorModel
    .getLanguageIdFromCountryId(req.query.countryId)
    .then((languageId) => {
      translatorModel.getISO639FromLanguageId(languageId).then((ISO639) => {
        axios
          .post(
            `https://translation.googleapis.com/language/translate/v2?key=${googleTranslateApiKey}`,
            {
              q: req.query.phraseToTranslate,
              source: "en",
              target: ISO639,
              format: "text",
            }
          )
          .then((response) => {
            res.json(response.data.data.translations[0].translatedText);
          });
      });
    })
    .catch((error) => {
      res.status(500).json({
        error,
      });
    });
}

module.exports = {
  getStandardTranslations,
  getOnDemandTranslation,
};
