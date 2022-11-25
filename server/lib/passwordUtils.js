const crypto = require("crypto");
const iterations = parseInt(process.env.ITERATIONS);
const length = parseInt(process.env.LENGTH);
const algo = process.env.ALGO;

function validatePassword(password, hash, salt) {
  const hashInput = crypto
    .pbkdf2Sync(password, salt, iterations, length, algo)
    .toString("hex");
  return hash === hashInput;
}

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
