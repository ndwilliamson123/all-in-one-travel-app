const passport = require("passport");
const authModel = require("../models/authModel");
const LocalStrategy = require("passport-local").Strategy;
const passwordUtils = require("../lib/passwordUtils");

const verifyCallback = (username, password, done) => {
  authModel
    .getUserByEmail(username)
    .then((userData) => {
      if (userData === undefined) {
        return done(null, false);
      }

      const isValid = passwordUtils.validatePassword(
        password,
        userData.password_hash,
        userData.password_salt
      );

      if (!isValid) {
        return done(null, false);
      } else {
        return done(null, userData);
      }
    })
    .catch((error) => {
      console.log(error);
      done(error);
    });
};

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  console.log("serial", user.email);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log("deserial", user.email);

  authModel
    .getUserByEmail(user.email)
    .then((userData) => {
      done(null, userData);
    })
    .catch((error) => {
      done(error);
    });
});
