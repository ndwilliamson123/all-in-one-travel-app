const knex = require("knex")(require("../knexfile").development);
const generalUtils = require("../lib/generalUtils");

function getLanguageIdFromCountryId(countryId) {
  return knex
    .select("language_id")
    .from("travel_app.country")
    .where("id", countryId)
    .then((db_data) => {
      return db_data[0].language_id;
    })
    .catch((error) => {
      return generalUtils.errorRetrievingData(error);
    });
}

function getISO639FromLanguageId(languageId) {
  return knex
    .select("ISO639")
    .from("travel_app.language")
    .where("id", languageId)
    .then((db_data) => {
      return db_data[0].ISO639;
    })
    .catch((error) => {
      return generalUtils.errorRetrievingData(error);
    });
}

function getStandardTranslations(languageId) {
  return knex
    .raw(
      `SELECT phrase.text as phrase, translation.text as translatedText FROM phrase JOIN translation ON translation.phrase_id = phrase.id AND translation.language_id = ${languageId};`
    )
    .then((db_data) => {
      return db_data[0];
    })
    .catch((error) => {
      return generalUtils.errorRetrievingData(error);
    });
}

module.exports = {
  getLanguageIdFromCountryId,
  getISO639FromLanguageId,
  getStandardTranslations,
};
