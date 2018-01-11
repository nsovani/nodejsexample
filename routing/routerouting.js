var router = require('express').Router();
var Route = require('../model/Route.js');

router.get('/', function(req, res, next) {
  Route.find(function (err, Routes) {
    if (err) return next(err);
    res.json(Routes);
  });
});

router.get('/users/:id',function(req,res,next){
    Route.findOne({'users':parseInt(req.params.id)}, function(err,Route){
      if (err) return next(err);
      res.json(Route);
    });
});

router.get('/bus/:number',function(req,res,next){
    Route.findOne({'bus':req.params.number}, function(err,Route){
      if (err) return next(err);
      res.json(Route);
    });
});

router.post('/', function(req, res, next) {
  Route.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  Route.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  var requestedChangedRoute = req.body;
  //console.log(requestedChangedRoute);
  Route.findById(req.params.id, function (err, Route) {
       if (err) return next(err);
   console.log(requestedChangedRoute);
   
      Route.users = requestedChangedRoute.users;
      Route.stops = requestedChangedRoute.stops;
      Route.landmarks = requestedChangedRoute.landmarks;
       console.log(Route);
       Route.save();
       res.json(Route);
     });
  //res.json("'data':'hello'");
});

router.delete('/:id', function(req, res, next) {
  Route.findByIdAndRemove(req.params.id, req.body,
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});
module.exports = router;

