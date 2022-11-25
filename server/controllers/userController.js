const userModel = require("../models/userModel");
const {v4: uuidv4 } = require('uuid');

const passwordUtils = require("../lib/passwordUtils");
const crypto = require("crypto");
const iterations = parseInt(process.env.ITERATIONS);
const length = parseInt(process.env.LENGTH);
const algo = process.env.ALGO;

// async function authenticateUser(req, res) {
//     res.json({
//       message: "this is working properly, for now"
//     })
// }

async function registerUser(req, res) {
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
  authenticateUser,
};
