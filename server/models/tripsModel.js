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

function addNewTrip(userId, trip) {
  const {date_start, date_end, destination_country_id} = trip;
  console.log('model', trip)
  // return knex('travel_app.trip')
  //   .insert({
  //     user_id: userId,
  //     date_start,
  //     date_end,
  //     destination_country_id
  //   })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}

module.exports = {
  getTripsByUserId,
  getHotelByTripId,
  addNewTrip
};
