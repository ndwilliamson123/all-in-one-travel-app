const router = require("express").Router();
const tripsController = require("../controllers/tripsController");

router.get("/", (req, res) => {
  tripsController.getTripsByUserId(req, res);
});

router.get("/hotel", (req, res) => {
  tripsController.getHotelByTripId(req, res);
});

router.get("/new-trip", (req, res) => {
  tripsController.addNewTrip(req, res);
});

module.exports = router;
