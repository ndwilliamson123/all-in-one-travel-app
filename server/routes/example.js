const router = require("express").Router();
const exampleController = require('../controllers/exampleController');
const fs = require("fs");

router.get("/", (req, res) => {
    console.log('route')
    res.json(exampleController.getAllData())
});

module.exports = router;
