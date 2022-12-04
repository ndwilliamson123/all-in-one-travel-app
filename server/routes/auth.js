const router = require("express").Router();
const passport = require("passport");
const authController = require("../controllers/authController");

router.post("/", passport.authenticate('local'), (req, res) => {
  authController.loginUser(req, res)
});

router.post("/register", (req, res) => {
    authController.registerUser(req, res);
})

module.exports = router;
