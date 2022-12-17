const knex = require("knex")(require("../knexfile").development);
const generalUtils = require("../lib/generalUtils");

/**
 *
 * @param {object} user all properties required to save user to database
 */
function insertNewUser(user) {
  const {
    user_id,
    name,
    email,
    password_salt,
    password_hash,
    home_country_id,
  } = user;

  return knex
    .insert({
      user_id,
      name,
      email,
      password_salt,
      password_hash,
      home_country_id,
    })
    .into("user")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return generalUtils.errorRetrievingData(error)
    });
}

module.exports = {
  insertNewUser,
};
