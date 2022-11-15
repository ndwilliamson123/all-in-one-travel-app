const fs = require("fs");

const readData = () => {
    console.log('model read')
    return JSON.parse(fs.readFileSync('./data/embassy.json'))
}

const getAllData = () => {
    console.log('model get all')
    return readData()
  };

module.exports = {
    getAllData
}