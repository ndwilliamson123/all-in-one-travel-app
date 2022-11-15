const fs = require("fs");

const readData = () => {
    return JSON.parse(fs.readFileSync('./data/embassy.json'))
}

const getAllData = () => {
    return readData()
  };

module.exports = {
    getAllData
}