const knex = require("knex")(require("../knexfile").development);

async function getUserByEmail(email) {
  let userData = {};
  await knex
    .select("*")
    .from("travel_app.user")
    .where("email", email)
    .then((db_data) => {
      userData = db_data[0];
    })
    .catch((error) => {
      console.log('error',error, new Date());
    });

  return userData;
}

async function getUserByUserId(userId) {
  let userData = {};
  await knex
    .select("*")
    .from("travel_app.user")
    .where("user_id", userId)
    .then((db_data) => {
      userData = db_data[0];
    })
    .catch((error) => {
      console.log('error',error, new Date());
    });

  return userData;
}

module.exports = {
  getUserByEmail,
  getUserByUserId,
};
