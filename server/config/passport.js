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
      console.log(error, new Date());
      done(error);
    });
};

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((userEmail, done) => {
  authModel
    .getUserByEmail(userEmail)
    .then((userData) => {
      done(null, userData.email);
    })
    .catch((error) => {
      console.log(error, new Date());
      done(error);
    });
});
