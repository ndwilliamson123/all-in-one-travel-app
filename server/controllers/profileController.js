const profileModel = require("../models/profileModel");
const generalUtils = require("../lib/generalUtils");
const passwordUtils = require("../lib/passwordUtils");

function getProfileDataByUserId(req, res) {
  profileModel
    .getProfileDataByUserId(req.user)
    .then((profileData) => {
      res.json(profileData);
    })
    .catch((error) => {
      console.log(error);
    });
}

function setProfileDataByUserId(req, res) {
  profileModel
    .setProfileDataByUserId(req.user, req.query)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      generalUtils.errorRetrievingData(error)
    });
}

function updatePassword(req, res) {
  console.log('controller', req.query, req.user)

  profileModel.getCurrentPasswordHashAndSaltByUserId(req.user)
    .then((userData) => {
      const isValid = passwordUtils.validatePassword(req.query.currentPassword, userData.password_hash, userData.password_salt)

      if(isValid === true) {
        const {hash, salt} = passwordUtils.generatePassword(req.query.newPassword)

        profileModel.updatePasswordByUserId(req.user, hash, salt)
          .then((response) => {
            console.log(response)
            res.json({
              message: "Password updated successfully"
            })
          })
          .catch((error) => {
            generalUtils.errorRetrievingData(error)
          })
      } else {
        res.status(401).json({
          message: "Invalid password submitted. Please reenter your password."
        })
      }
    })

  
}

module.exports = {
  getProfileDataByUserId,
  setProfileDataByUserId,
  updatePassword
};
