const profileModel = require("../models/profileModel");
const generalUtils = require("../lib/generalUtils");

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
  console.log('controller', req.query, req.user)
  profileModel
    .setProfileDataByUserId(req.user, req.query)
    .then((something) => {
      console.log(something);
      res.json(something);
    })
    .catch((error) => {
      res.status(500).json({
        error,
      });
    });
}

module.exports = {
  getProfileDataByUserId,
  setProfileDataByUserId,
};
