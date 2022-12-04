const knex = require("knex")(require("../knexfile").development);

function getHomeDataByUserId(userId) {
  return knex
    .select("home_country_id")
    .from("travel_app.user")
    .where("user_id", userId)
    .then((db_data) => {
      return db_data[0].home_country_id;
    })
    .then((home_country_id) => {
      return knex
        .select("return_reqs", "name")
        .from("travel_app.country")
        .where("id", home_country_id)
        .then((db_data) => {
          return db_data[0]
        });
    })
    .catch((error) => {
      console.log(error, new Date());
      return {
        message:
          "There was an error retrieving the data. Please try again later.",
      };
    });
}

module.exports = {
  getHomeDataByUserId,
};
