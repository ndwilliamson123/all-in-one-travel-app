const userModel = require("../models/userModel");
const {v4: uuidv4 } = require('uuid');

const passwordUtils = require("../lib/passwordUtils");

function registerUser(req, res) {
  //VALIDATE USER INPUT HERE, trim, special chars, etc.

  const saltAndHash = passwordUtils.generatePassword(req.body.password);

  const { salt, hash } = saltAndHash;

  const newUser = {
    user_id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    password_salt: salt,
    password_hash: hash,
    home_country_id: req.body.home_country_id
  }

  // NEED TO MAKE A MODEL CALL TO SAVE USER TO DB
  
}

module.exports = {
  registerUser,
};
