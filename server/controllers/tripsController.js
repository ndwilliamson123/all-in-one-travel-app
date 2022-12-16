const tripsModel = require("../models/tripsModel");

function getTripsByUserId(req, res) {
  tripsModel
    .getTripsByUserId(req.user)
    .then((tripData) => {
      res.json(tripData);
    })
    .catch((error) => {
      res.status(500).json({
        error,
      });
    });
}

function getHotelByTripId(req, res) {
  tripsModel
    .getHotelByTripId(req.query.tripId)
    .then((hotelData) => {
      res.json(hotelData)
    })
    .catch((error) => {
      res.status(500).json({
        error,
      })
    })
}

module.exports = {
  getTripsByUserId,
  getHotelByTripId,
};
