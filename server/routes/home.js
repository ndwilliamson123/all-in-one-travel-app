const router = require("express").Router();
const homeController = require("../controllers/homeController");

router.get("/", (req, res) => {
  homeController.getUserHomeData(req, res);
});

module.exports = router;
