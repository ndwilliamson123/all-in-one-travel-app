const knex = require("knex")(require("../knexfile").development);
const generalUtils = require("../lib/generalUtils");

function getProfileDataByUserId(userId) {
  return knex
    .select("name", "email", "home_country_id")
    .from("travel_app.user")
    .where("user_id", userId)
    .then((db_data) => {
      return db_data[0];
    })
    .catch((error) => {
      return generalUtils.errorRetrievingData(error);
    });
}

function setProfileDataByUserId(userId, newData) {
  const { name, email, home_country_id } = newData;
  return knex("travel_app.user").where("user_id", userId).update({
    name,
    email,
    home_country_id,
  }).then((response) => {
    console.log(response)
    return response
  });
}

module.exports = {
  getProfileDataByUserId,
  setProfileDataByUserId,
};
