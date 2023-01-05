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

function addNewTrip(req, res) {
  tripsModel.addNewTrip(req.user, req.query)
  res.json({
    message: 'Trip added successfully. Travel safe!'
  })
}

module.exports = {
  getTripsByUserId,
  getHotelByTripId,
  addNewTrip
};
