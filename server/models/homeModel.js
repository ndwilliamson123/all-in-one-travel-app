const knex = require("knex")(require("../knexfile").development);

async function getUserHomeData(userEmail) {
  let userHomeData = {};
  await knex
    .select("home_country_id")
    .from("travel_app.user")
    .where("email", userEmail)
    .then((db_data) => {
      return db_data[0].home_country_id;
    })
    .then((home_country_id) => {
      return knex
        .select("return_reqs", "name")
        .from("travel_app.country")
        .where("id", home_country_id)
        .then((db_data) => {
          userHomeData = db_data[0];
        });
    })
    .catch((error) => {
      console.log(error, new Date());
      userHomeData = {
        message:
          "There was an error retrieving the data. Please try again later.",
      };
    });

  return userHomeData;
}

module.exports = {
  getUserHomeData,
};
