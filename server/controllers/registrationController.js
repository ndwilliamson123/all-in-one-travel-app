const registrationModel = require("../models/registrationModel");
const loginModel = require("../models/loginModel");
const { v4: uuidv4 } = require("uuid");
const passwordUtils = require("../lib/passwordUtils");
const e = require("cors");

function registerUser(req, res) {
  //checking if user already exists
  loginModel.getUserByEmail(req.body.email).then((userData) => {
    if (userData !== undefined) {
      res.status(400).json({
        message:
          "User with that email already exists. Please login or use a different email.",
      });
    } else {
      //VALIDATE USER INPUT HERE, trim, special chars, in case frontend spoof etc.

      const saltAndHash = passwordUtils.generatePassword(req.body.password);
      const { salt, hash } = saltAndHash;

      const newUser = {
        user_id: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        password_salt: salt,
        password_hash: hash,
        home_country_id: req.body.home_country_id,
      };

      registrationModel
        .insertNewUser(newUser)
        .then((response) => {
          if (response["0"] !== 0) {
            res.status(500).json({
              error: "Error registering user. Please try again later.",
            });
          } else {
            res.status(201).json({
              message: "Thank you for signing up! Please login to continue.",
            });
          }
        })
        .catch((error) => {
          res.status(500).json({
            error: "Error registering user. Please try again later.",
          });
        });
    }
  });
}

module.exports = {
  registerUser,
};
