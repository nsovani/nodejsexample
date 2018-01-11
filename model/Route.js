var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var routeSchema =  new Schema({
    name: {type: String, required: true},
    cab: {type: String, required: true},
    users:[ {type: String}],
    stops:[
         {
            name: {type: String, required: true},
            latitude: {type: String, required: true},
            longitude: {type: String, required: true}

        }
    ],
    landmarks:[
         {
            name: {type: String, required: true},
            latitude: {type: String, required: true},
            longitude: {type: String, required: true}

        }
    ]
  });

var Routes = mongoose.model('Route', routeSchema,'Routes');


module.exports = Routes;