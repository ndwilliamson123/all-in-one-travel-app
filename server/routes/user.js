const router = require("express").Router();
const passport = require("passport");
const userController = require("../controllers/userController");

router.post("/", passport.authenticate('local'), (req, res) => {
  res.json({
    message: "Login attempted"
  })
  // userController.authenticateUser(req, res);
});

router.post("/register", (req, res) => {
    userController.registerUser(req, res);
})

module.exports = router;
