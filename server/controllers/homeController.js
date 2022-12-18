const homeModel = require("../models/homeModel");

function getHomeDataByUserId(req, res) {
  homeModel
    .getHomeDataByUserId(req.user)
    .then((userHomeData) => {
      res.json(userHomeData);
    })
    .catch((error) => {
      res.status(500).json({
        error,
      });
    });
}

module.exports = {
  getHomeDataByUserId,
};
