const exampleModel = require('../models/exampleModel');

function getAllData(req, res) {
    console.log('controller')
    return exampleModel.getAllData()
}

module.exports = {
    getAllData
}