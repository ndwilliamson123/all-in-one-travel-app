const fs = require("fs");

function getAllData() {
    console.log('model read')
    return JSON.parse(fs.readFileSync('./data/embassy.json'))
  };

module.exports = {
    getAllData
}