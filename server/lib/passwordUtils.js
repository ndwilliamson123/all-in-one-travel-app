const crypto = require("crypto");
const iterations = parseInt(process.env.ITERATIONS);
const length = parseInt(process.env.LENGTH);
const algo = process.env.ALGO;

/**
 *
 * @param {string} password the current user's entered password
 * @param {string} hash the current user's stored hash
 * @param {string} salt the current user's stored salt
 * @returns {boolean} true if entered password hash === stored hash
 */
function validatePassword(password, hash, salt) {
  const hashInput = crypto
    .pbkdf2Sync(password, salt, iterations, length, algo)
    .toString("hex");
  return hash === hashInput;
}

/**
 *
 * @param {string} password the new user's password
 * @returns {object} new user's generated salt and hash from password
 */
function generatePassword(password) {
  const genSalt = crypto.randomBytes(16).toString("hex");
  const genHash = crypto
    .pbkdf2Sync(password, genSalt, iterations, length, algo)
    .toString("hex");

  return {
    salt: genSalt,
    hash: genHash,
  };
}

module.exports = {
  validatePassword,
  generatePassword,
};
