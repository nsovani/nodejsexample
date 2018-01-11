var router = require('express').Router();
var Landmark = require('../model/Landmark.js');

router.get('/', function(req, res, next) {
  Landmark.find(function (err, Landmarks) {
    if (err) return next(err);
    res.json(Landmarks);
  });
});

router.post('/', function(req, res, next) {
  Landmark.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  Landmark.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  var requestedChangedLandmark = req.body;
  //console.log(requestedChangedLandmark);
  Landmark.findById(req.params.id, function (err, Landmark) {
       if (err) return next(err);
   console.log(requestedChangedLandmark);
      Landmark.latitude = requestedChangedLandmark.latitude;
      Landmark.longitude = requestedChangedLandmark.longitude;
       console.log(Landmark);
       Landmark.save();
       res.json(Landmark);
     });
  //res.json("'data':'hello'");
});

router.delete('/:id', function(req, res, next) {
  Landmark.findByIdAndRemove(req.params.id, req.body,
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});
module.exports = router;

