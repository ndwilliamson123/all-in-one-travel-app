const router = require("express").Router();
const passport = require("passport");
const loginController = require("../controllers/loginController");

router.post("/", passport.authenticate("local"), (req, res) => {
  loginController.loginUser(req, res);
});

module.exports = router;
