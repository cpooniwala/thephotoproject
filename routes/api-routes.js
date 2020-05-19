// Get route for retrieving a single Camera
var db = require("../models");
const router = require("express").Router();

module.exports = function (app) {
  app.get("/api/camera/:name", function (req, res) {
    db.Cameras.findOne({
      where: {
        name: req.params.name,
      },
    }).then(function (dbName) {
      console.log("successfully found camera");
      res.json(dbName);
    });
  });

  app.post("/api/cameras", function (req, res) {
    console.log(req);
    db.Cameras.create({
      name: req.body.name,
    }).then(function (dbCameras) {
      res.json(dbCameras);
    });
  });

  app.post("/api/pictures", function (req, res) {
    console.log(req.body);
    db.Pictures.create({
      caption: req.body.caption,
      location: req.body.location,
      instagram: req.body.instagram,
      url: req.body.url,
      CameraId: req.body.CameraId,
    })
      .then(function (dbPictures) {
        console.log("success");
        res.json(dbPictures);
      })
      .catch(function (err) {
        console.log(err);
      });
  });

  // If no API routes are hit, send the React app
  router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
};
