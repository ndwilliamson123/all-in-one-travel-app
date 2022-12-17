const router = require("express").Router();
const emergencyInfoController = require("../controllers/emergencyInfoController");

router.get("/", (req, res) => {
  emergencyInfoController.getInfo(req, res);
});

module.exports = router;
