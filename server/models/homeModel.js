const knex = require("knex")(require("../knexfile").development);

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
      console.log("error", error, new Date());
      return {
        message:
          "There was an error retrieving the data. Please try again later.",
      };
    });
}

module.exports = {
  getHomeDataByUserId,
};
