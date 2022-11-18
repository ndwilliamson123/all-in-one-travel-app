const knex = require("knex")(require("../knexfile").development);

async function getLanguageTranslations(languageId) {
  let translationData = {};
  await knex
    .raw(
      `SELECT travel_app.phrase.id, travel_app.phrase.text, travel_app.translation.translation
      FROM travel_app.phrase
      JOIN travel_app.translation
      ON translation.phrase_id = phrase.id AND translation.language_id = ${languageId};`
    )
    .then((db_data) => {
      translationData = db_data[0];
    })
    .catch((error) => {
      console.log(error, new Date());
      userHomeData = {
        message:
          "There was an error retrieving the data. Please try again later.",
      };
    });

  return translationData;
}

module.exports = {
  getLanguageTranslations,
};
