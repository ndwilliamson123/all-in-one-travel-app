const knex = require("knex")(require("../knexfile").development);

async function getUserByEmail(email) {
  let userData = {};
  await knex
    .select("*")
    .from("travel_app.user")
    .where("email", email)
    .then((db_data) => {
      console.log("user found:", db_data[0], new Date());
      userData = db_data[0];
    })
    .catch((error) => {
      console.log('error',error, new Date());
    });

  return userData;
}

module.exports = {
  getUserByEmail,
};
