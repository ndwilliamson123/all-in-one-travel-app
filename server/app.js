require("dotenv").config();
const port = process.env.PORT || 5150;
const secretKey = process.env.SECRET_KEY;
const frontEndDomain = process.env.FRONTEND_DOMAIN;

const cors = require("cors");
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const KnexSessionStore = require("connect-session-knex")(session);
const knex = require("knex")(require("./knexfile").development);
const sessionStore = new KnexSessionStore({
  knex,
  tablename: "session",
});

// setting routes
const authRoute = require("./routes/auth");
const homeRoute = require("./routes/home");
const translatorRoute = require("./routes/translator");
const tripsRoute = require("./routes/trips");

// allow connections from outside server domain, specifying front end domain to send/receive cookies
app.use(
  cors({
    origin: frontEndDomain,
    preflightContinue: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// enable req.body middleware
app.use(express.json());

// creating user session upon a receieved request
app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 10, //10 seconds for testing
    },
  })
);

// passport initialization with session
require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

// middleware executed upon every request
app.use((req, res, next) => {

  if (!req.user && req.url !== "/auth") {
    console.log(`request received from unauthenticated user`, new Date());
    res.status(401).json({
      message: "Unauthorized request or authentication expired. Please log in.",
    });
  } else {
    if (req.method === "OPTIONS") {
      // log nothing, preventing duplicate log for user authentication request
    } else if (req.body.username) {
      console.log(
        `authentication request received from ${req.body.username}`,
        new Date()
      );
    } else {
      console.log(
        `request received from ${req.user ? req.user : req.body.username}`,
        new Date()
      );
    }
    next();
  }
});

// API routes
app.use("/auth", authRoute);
app.use("/home", homeRoute);
app.use("/trips", tripsRoute);
app.use("/translator", translatorRoute);

app.use(handleError);

// start listening for connections
app.listen(port, () => {
  console.log(`Server listening on ${port}:`, new Date());
});

function handleError(err, req, res, next) {
  res.json({
    err: err,
  });
}
