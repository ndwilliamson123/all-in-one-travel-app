const homeModel = require('../models/homeModel');

function getUserCountryData(userId) {
    return homeModel.getUserCountryData(userId)
}

module.exports = {
    getUserCountryData
}