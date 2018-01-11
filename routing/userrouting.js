var router = require('express').Router();
var User = require('../model/User.js');
var Route = require('../model/Route.js');

router.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

router.post('/', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//Working but masked for company id
// router.get('/:id', function(req, res, next) {
//   User.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

router.get('/:companyid', function(req, res, next) {
  User.findOne({ 'id': req.params.companyid }, function (err, User) {
  //User.find(, function (err, post) {
    if (err) return next(err);
    res.json(User);
  });
});

router.put('/:id', function(req, res, next) {
  var requestedChangedUser = req.body;
  //console.log(requestedChangedUser);
  User.findById(req.params.id, function (err, user) {
       if (err) return next(err);
   console.log(requestedChangedUser);
      user.location.latitude = requestedChangedUser.location.latitude;
      user.location.longitude = requestedChangedUser.location.longitude;
      user.email = requestedChangedUser.email;
       console.log(user);
       user.save();
       res.json(user);
     });
  //res.json("'data':'hello'");
});

router.put('/:id/location', function(req, res, next) {
  var requestedChangedUser = req.body;
  //console.log(requestedChangedUser);
  User.findById(req.params.id, function (err, user) {
       if (err) return next(err);
       console.log(requestedChangedUser);
       user.location.latitude = requestedChangedUser.location.latitude;
       user.location.longitude = requestedChangedUser.location.longitude;
       console.log(user);
       user.save();
       res.json(user);
     });
  //res.json("'data':'hello'");
});

router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body,
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});
module.exports = router;

