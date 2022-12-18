const knex = require("knex")(require("../knexfile").development);
const generalUtils = require("../lib/generalUtils");

function getInfo(home_country_id, destination_country_id) {
  return knex
    .raw(
      `SELECT phrase.text as phrase, translation.text as translatedText FROM phrase JOIN translation ON translation.phrase_id = phrase.id AND translation.language_id = 2;`
    )
    .then((db_data) => {
      console.log(db_data[0]);
      return db_data[0];
    })
    .catch((error) => {
      return generalUtils.errorRetrievingData(error)
    });
}

module.exports = {
  getInfo,
};
