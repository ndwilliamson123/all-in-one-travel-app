const router = require("express").Router();
const embassyController = require('../controllers/embassyController');
const fs = require("fs");

router.get("/all", (req, res) => {
    res.json(embassyController.getAllData(req, res))
});

module.exports = router;
