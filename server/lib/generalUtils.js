function errorRetrievingData(error) {
  console.log("error", error, new Date());
  return {
    message: "There was an error retrieving the data. Please try again later.",
  };
}

module.exports = {
  errorRetrievingData,
};
