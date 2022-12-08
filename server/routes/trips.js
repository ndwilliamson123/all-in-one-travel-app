const router = require("express").Router();
const tripsController = require("../controllers/tripsController");

router.get("/", (req, res) => {
  tripsController.getTripsByUserId(req, res);
});

module.exports = router;
