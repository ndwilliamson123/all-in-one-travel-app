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

module.exports = {
  getTripsByUserId,
};
