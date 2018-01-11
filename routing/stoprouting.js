var router = require('express').Router();
var Stop = require('../model/Stop.js');

router.get('/', function(req, res, next) {
  Stop.find(function (err, Stops) {
    if (err) return next(err);
    res.json(Stops);
  });
});

router.post('/', function(req, res, next) {
  Stop.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  Stop.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  var requestedChangedStop = req.body;
  //console.log(requestedChangedStop);
  Stop.findById(req.params.id, function (err, Stop) {
       if (err) return next(err);
   console.log(requestedChangedStop);
      Stop.latitude = requestedChangedStop.latitude;
      Stop.longitude = requestedChangedStop.longitude;
       console.log(Stop);
       Stop.save();
       res.json(Stop);
     });
  //res.json("'data':'hello'");
});

router.delete('/:id', function(req, res, next) {
  Stop.findByIdAndRemove(req.params.id, req.body,
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});
module.exports = router;

