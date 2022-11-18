const homeModel = require("../models/homeModel");

async function getUserHomeData(req, res) {
  await homeModel
    .getUserHome(req.body.userId)
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
  getUserHomeData,
};
