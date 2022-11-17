// import seed data files, arrays of objects
const hotelData = require("../seed_data/hotel");

exports.seed = function (knex) {
  return knex("hotel").del()
    .then(function () {
      return knex("hotel").insert(hotelData);
    });
};
