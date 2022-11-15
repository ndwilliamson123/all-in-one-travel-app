require("dotenv").config();
const PORT = process.env.PORT || 5150;
const cors = require("cors");
const express = require("express");
const app = express();

// setting routes
const exampleRoute = require("./routes/example")
const homeRoute = require("./routes/home")
const translatorRoute = require("./routes/translator")

// allow connections from outside server domain
app.use(cors());

// converting any data received from client to JSON
app.use(express.json());

// executed upon every request
app.use((req, res, next) => {
  console.log("request received", new Date());

  const userId = req.body.userId

  if (userId !== undefined) {
    console.log("Valid request:", new Date());
    next();
  } else {
    res.json({
      message: "Bad request: invalid user ID",
    });
  }
});

//API routes
app.use("/example", exampleRoute)
app.use("/home", homeRoute)
app.use("/translator", translatorRoute)

// start listening for connections
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}:`, new Date());
});
