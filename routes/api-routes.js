// Get route for retrieving a single Camera
var db = require("../models");
//const router = require("express").Router();

module.exports = function (app) {
  //Camera API
  app.get("/api/camera/:name", function (req, res) {
    db.Cameras.findOne({
      where: {
        name: req.params.name,
      },
    })
      .then(function (dbName) {
        console.log("successfully found camera");
        res.json(dbName);
      })
      .catch(function (err) {
        console.log(err);
      });
  });

  app.post("/api/cameras", function (req, res) {
    console.log(req);
    db.Cameras.create({
      name: req.body.name,
    })
      .then(function (dbCameras) {
        res.json(dbCameras);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
  //Picture API
  app.get("/api/pictures/:CameraId", function (req, res) {
    db.Pictures.findAll({
      where: {
        CameraId: req.params.CameraId,
      },
    })
      .then(function (dbPictures) {
        res.json(dbPictures);
      })
      .catch(function (err) {
        if (err) throw err;
      });
  });

  app.get("/api/pictures/", function (req, res) {
    db.Pictures.findAll({}).then(function (dbPictures) {
      res.json(dbPictures);
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

  // PUT route for updating posts
  app.put("/api/pictures", function (req, res) {
    db.Pictures.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
      .then(function (dbPost) {
        res.json(dbPost);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
};
