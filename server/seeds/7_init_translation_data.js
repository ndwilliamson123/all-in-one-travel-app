// import seed data files, arrays of objects
const translationData = require("../seed_data/translation");

exports.seed = function (knex) {
  return knex("translation").del()
    .then(function () {
      return knex("translation").insert(translationData);
    });
};
