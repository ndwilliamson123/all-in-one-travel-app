const knex = require("knex")(require("../knexfile").development);
const generalUtils = require("../lib/generalUtils");

function getHomeDataByUserId(userId) {
  const returnData = {};

  return knex
    .select("home_country_id", "name", "email")
    .from("travel_app.user")
    .where("user_id", userId)
    .then((db_data) => {
      Object.assign(returnData, db_data[0]);
      return db_data[0].home_country_id;
    })
    .then((home_country_id) => {
      return knex
        .select("return_reqs as returnReqs", "name as countryName")
        .from("travel_app.country")
        .where("id", home_country_id)
        .then((db_data) => {
          Object.assign(returnData, db_data[0]);
          return returnData;
        });
    })
    .catch((error) => {
      return generalUtils.errorRetrievingData(error)
    });
}

module.exports = {
  getHomeDataByUserId,
};
