// import seed data files, arrays of objects
const phraseData = require("../seed_data/phrase");

exports.seed = function (knex) {
  return knex("phrase").del()
    .then(function () {
      return knex("phrase").insert(phraseData);
    });
};
