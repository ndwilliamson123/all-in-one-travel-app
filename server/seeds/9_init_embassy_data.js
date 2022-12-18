// import seed data files, arrays of objects
const embassyData = require("../seed_data/embassy");

exports.seed = function (knex) {
  return knex("embassy").del()
    .then(function () {
      return knex("embassy").insert(embassyData);
    });
};
