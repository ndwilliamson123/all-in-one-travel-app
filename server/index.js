require("dotenv").config();
const PORT = process.env.PORT || 5150;
const cors = require("cors");
const express = require("express");
const app = express();

// setting routes
const embassyRoute = require("./routes/embassy")

// allow connections from outside our domain
app.use(cors());

// converting any data received from client to JSON
app.use(express.json());

// executed upon every request
app.use((req, res, next) => {
  console.log("request received", new Date());

  const error = req.body.status;

  if (!error) {
    console.log("Valid request:", new Date());
    next();
  } else {
    res.json({
      message: "Bad request:",
    });
  }
});

app.use("/embassy", embassyRoute)

// start listening for connections
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}:`, new Date());
});
