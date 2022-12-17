const knex = require("knex")(require("../knexfile").development);
const generalUtils = require("../lib/generalUtils");

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
      return generalUtils.errorRetrievingData(error)
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
      return generalUtils.errorRetrievingData(error)
    });
}

module.exports = {
  getTripsByUserId,
  getHotelByTripId,
};
