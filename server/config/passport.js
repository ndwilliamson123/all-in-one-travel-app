const passport = require("passport");
const userModel = require("../models/userModel");
const LocalStrategy = require("passport-local").Strategy;
const passwordUtils = require("../lib/passwordUtils");

const verifyCallback = (username, password, done) => {
  userModel
    .getUserByEmail(username)
    .then((userData) => {
      if (userData.length === 0) {
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
      done(error);
    });
};

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((userEmail, done) => {
  userModel
    .getUserByEmail(userEmail)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
