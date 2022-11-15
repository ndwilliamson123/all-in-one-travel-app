const exampleModel = require('../models/exampleModel');

function getAllData() {
    console.log('controller')
    return exampleModel.getAllData()
}

module.exports = {
    getAllData
}