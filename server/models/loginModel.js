const knex = require("knex")(require("../knexfile").development);

function getUserByEmail(email) {
  return knex
    .select("*")
    .from("travel_app.user")
    .where("email", email)
    .then((db_data) => {
      return db_data[0];
    })
    .catch((error) => {
      console.log("error", error, new Date());
      return {
        message:
          "There was an error validating your account. Please try again later.",
      };
    });
}

function getUserByUserId(userId) {
  return knex
    .select("*")
    .from("travel_app.user")
    .where("user_id", userId)
    .then((db_data) => {
      return db_data[0];
    })
    .catch((error) => {
      console.log("error", error, new Date());
      return {
        message:
          "There was an error validating your account. Please try again later.",
      };
    });
}

module.exports = {
  getUserByEmail,
  getUserByUserId,
};
