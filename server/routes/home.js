const router = require("express").Router();
const homeController = require('../controllers/homeController');
const fs = require("fs");

router.get("/", (req, res) => {
    const userId = req.body.userId
    res.json(homeController.getUserCountryData(userId))
});

module.exports = router;
