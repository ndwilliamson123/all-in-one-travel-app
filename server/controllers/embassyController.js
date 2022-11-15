const embassyModel = require('../models/embassyModel');

function getAllData(req, res) {
    return embassyModel.getAllData()
}

module.exports = {
    getAllData
}