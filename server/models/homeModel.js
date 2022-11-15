const fs = require("fs");

const readData = (userId) => {
  const userOriginCountry = JSON.parse(
    fs.readFileSync("./data/user.json")
  ).find((user) => user.UserId === userId).CountryId;

  const countryData = JSON.parse(fs.readFileSync("./data/country.json"));

  //filtering to the user's country
  const userCountry = countryData.find(
    (country) => country.Id === userOriginCountry
  );

  return userCountry;
};

const getUserCountryData = (userId) => {
  return readData(userId);
};

module.exports = {
  getUserCountryData,
};
