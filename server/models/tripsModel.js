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
  return knex('travel_app.trip')
    .insert({
      user_id: userId,
      date_start,
      date_end,
      destination_country_id
    })
    .then((tripId) => {
      return tripId[0]
    })
    .then((tripId) => {
      return knex('travel_app.hotel')
      .insert({
        trip_id: tripId,
        name: trip.hotel.name,
        address: trip.hotel.address,
        phone: trip.hotel.phone,
        website: trip.hotel.websiteUrl
      })
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
