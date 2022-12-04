const knex = require("knex")(require("../knexfile").development);

function getTripsByUserId(userId) {
  return knex
    .select("*")
    .from("travel_app.trip")
    .where("user_id", userId)
    .then((db_data) => {
        console.log(db_data)
      tripData = db_data;
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
    getTripsByUserId,
};
