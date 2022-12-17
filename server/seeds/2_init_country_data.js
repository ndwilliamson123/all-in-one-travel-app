// import seed data files, arrays of objects
const countryData = require("../seed_data/country");

exports.seed = function (knex) {
  return knex("country").del()
    .then(function () {
      return knex("country").insert(countryData);
    });
};
