const router = require("express").Router();
const registrationController = require("../controllers/registrationController");

router.put("/", (req, res) => {
  registrationController.registerUser(req, res);
});

module.exports = router;
