require("dotenv").config();
const port = process.env.PORT || 5150;
const secretKey = process.env.SECRET_KEY;
const frontEndDomain = process.env.FRONTEND_DOMAIN

const cors = require("cors");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const KnexSessionStore = require("connect-session-knex")(session);
const knex = require("knex")(require("./knexfile").development);
const sessionStore = new KnexSessionStore({
  knex,
  tablename: "session",
});

const app = express();

// setting routes
const homeRoute = require("./routes/home");
const translatorRoute = require("./routes/translator");
const userRoute = require("./routes/user");

// allow connections from outside server domain, specifying front end domain to send/receive cookies
app.use(cors({
  origin: frontEndDomain,
  preflightContinue: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}));

// enable req.body middleware
app.use(express.json());

// creating user session upon a receieved request
app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 10, //10 seconds for testing
    },
  })
);

require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log("request received", new Date());
  console.log(req.session);
  next();
});

//API routes
app.use("/home", homeRoute);
app.use("/translator", translatorRoute);
app.use("/login", userRoute);

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
