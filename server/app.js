require("dotenv").config();
const port = process.env.PORT || 8080;
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
const loginRoute = require("./routes/login");
const registrationRoute = require("./routes/registration");
const profileRoute = require("./routes/profile");
const homeRoute = require("./routes/home");
const translatorRoute = require("./routes/translator");
const tripsRoute = require("./routes/trips");
const emergencyInfoRoute = require("./routes/emergencyInfo")

app.options("/register", cors());

// allow connections from outside server domain, specifying front end domain to send/receive cookies
app.use(
  cors({
    origin: frontEndDomain,
    preflightContinue: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
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
      maxAge: 1000 * 60 * 60 * 24, // session is valid for 24 hours
    },
  })
);

// passport initialization with session
require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

// middleware executed upon every request
app.use((req, res, next) => {
  // setting session cookie maxAge to 0 to invalidate any future requests
  if(req.url === "/logout") {
    console.log(
      `${req.method} logout request received from ${req.user}`,
      new Date()
    );
    console.log(req.session)
    req.session.cookie.maxAge = 0;
    res.json({
      message: "Logout successful"
    })
  } else if (req.url === "/register") {
    console.log(
      `${req.method} registration request received from ${req.body.email}`,
      new Date()
    );
    next();
  } else {
    if (!req.user && req.url !== "/login") {
      console.log(`${req.method} request received from unauthenticated user`, new Date());
      res.status(401).json({
        message:
          "Unauthorized request or authentication expired. Please log in.",
      });
    } else {
      if (req.method === "OPTIONS") {
        // log nothing, preventing duplicate log for user authentication request
      } else 
      if (req.body.username) {
        console.log(
          `${req.method} authentication request received from ${req.body.username}`,
          new Date()
        );
      } else {
        console.log(
          `${req.method} request received to ${req.url} from ${req.user ? req.user : req.body.username}`,
          new Date()
        );
      }
      next();
    }
  }
});

// API routes
app.use("/login", loginRoute);
app.use("/register", registrationRoute);
app.use("/profile", profileRoute);
app.use("/home", homeRoute);
app.use("/trips", tripsRoute);
app.use("/translator", translatorRoute);
app.use("/emergency-info", emergencyInfoRoute);

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
