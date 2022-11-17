// import seed data files, arrays of objects
const countryLanguageData = require("../seed_data/countryLanguage");

exports.seed = function (knex) {
  return knex("country_language").del()
    .then(function () {
      return knex("country_language").insert(countryLanguageData);
    });
};
