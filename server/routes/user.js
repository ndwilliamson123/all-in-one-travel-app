const router = require("express").Router();
const passport = require("passport");
const userController = require("../controllers/userController");

router.post("/login", passport.authenticate('local', { failureRedirect: '/login-failure', successRedirect: '/login-success'}), (req, res) => {
  // userController.authenticateUser(req, res);
});

router.post("/register", (req, res) => {
    userController.registerUser(req, res);
})

module.exports = router;
