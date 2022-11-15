const fs = require("fs");

function getUserCountryData(userId) {
  const userOriginCountry = JSON.parse(
    fs.readFileSync("./data/user.json")
  ).find((user) => user.UserId === userId).CountryId;

  const countryData = JSON.parse(fs.readFileSync("./data/country.json"));

  //filtering to the user's country (simulating DB query)
  const userCountry = countryData.find(
    (country) => country.Id === userOriginCountry
  );

  return userCountry;
};

module.exports = {
  getUserCountryData,
};
