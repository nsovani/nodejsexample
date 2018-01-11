var router = require('express').Router();
var Cab = require('../model/Cab.js');

router.get('/', function(req, res, next) {
  Cab.find(function (err, Cab) {
    if (err) return next(err);
    res.json(Cabs);
  });
});

router.post('/', function(req, res, next) {
  Cab.create(req.body, function (err, Cab) {
    if (err) return next(err);
    res.json(Cab);
  });
});

router.get('/:registration', function(req, res, next) {
  Cab.findOne({'registration':req.params.registration}, function (err, Cab) {
    if (err) return next(err);
    res.json(Cab);
  });
});

router.put('/:registration', function(req, res, next) {
  var requestedChangedCab = req.body;
  Cab.findOne({'registration':req.params.registration}, function (err, Cab) {
      if (err) return next(err);
      console.log(requestedChangedCab);
      Cab.registraiton=requestedChangedCab.registration;
      Cab.drivaer=requestedChangedCab.driver;
      Cab.phone=requestedChangedCab.phone;
      Cab.location.latitude = requestedChangedCab.location.latitude;
      Cab.location.longitude = requestedChangedCab.location.longitude;
      Cab.capacity = requestedChangedCab.capacity;
      console.log(Cab);
      Cab.save();
      res.json(Cab);
    });
  //res.json("'data':'hello'");
});

router.delete('/:id', function(req, res, next) {
  Cab.findByIdAndRemove(req.params.id, req.body,
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});
module.exports = router;

