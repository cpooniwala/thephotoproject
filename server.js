const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.json());

// Requiring our models for syncing
var db = require("./models");

// Send every request to the React app
// Define any API routes before this runs
require("./routes/api-routes.js")(app);

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
