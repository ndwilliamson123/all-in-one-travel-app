const emergencyInfoModel = require("../models/emergencyInfoModel");

function getInfo(req, res) {
  emergencyInfoModel
    .getInfo(req.body.languageId)
    .then((translationData) => {
      res.json(translationData);
    })
    .catch((error) => {
      res.status(500).json({
        error,
      });
    });
}

module.exports = {
  getInfo,
};
