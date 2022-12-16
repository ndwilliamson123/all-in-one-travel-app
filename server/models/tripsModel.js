const knex = require("knex")(require("../knexfile").development);

/**
 *
 * @param {String} userId user's UUID
 * @returns
 */
function getTripsByUserId(userId) {
  return knex
    .select("*")
    .from("travel_app.trip")
    .where("user_id", userId)
    .then((db_data) => {
      return db_data;
    })
    .catch((error) => {
      console.log("error", error, new Date());
      return {
        message:
          "There was an error retrieving the data. Please try again later.",
      };
    });
}

function getHotelByTripId(tripId) {
  return knex
    .select("*")
    .from("travel_app.hotel")
    .where("trip_id", tripId)
    .then((db_data) => {
      return db_data[0];
    })
    .catch((error) => {
      return {
        message:
          "There was an error retrieving the data. Please try again later.",
      };
    });
}

module.exports = {
  getTripsByUserId,
  getHotelByTripId,
};
