// import seed data files, arrays of objects
const userData = require("../seed_data/user");

exports.seed = function (knex) {
  return knex("user").del()
    .then(function () {
      return knex("user").insert(userData);
    });
};
