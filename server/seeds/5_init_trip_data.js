// import seed data files, arrays of objects
const tripData = require("../seed_data/trip");

exports.seed = function (knex) {
  return knex("trip").del()
    .then(function () {
      return knex("trip").insert(tripData);
    });
};
