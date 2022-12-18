/**
 *
 * @param {object} req express.js req object
 * @param {object} res express.js res object
 */
function loginUser(req, res) {
  // if passport authentication was successful, inform user
  res.json({
    message: "Login successful",
  });
}

module.exports = {
  loginUser,
};
