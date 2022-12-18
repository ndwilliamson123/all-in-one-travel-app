// import seed data files, arrays of objects
const languageData = require("../seed_data/language");

exports.seed = function (knex) {
  return knex("language").del()
    .then(function () {
      return knex("language").insert(languageData);
    });
};
