var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var routeSchema =  new Schema({
    registration: {type: String, required: true},
    driver: {type: String, required: true},
    phone: {type: String, required: true},
    capacity: {type: Number, required: true},
    location:{
            latitude: {type: String, required: true},
            longitude: {type: String, required: true}
    }
  });

var Cabs = mongoose.model('Cab', routeSchema,'Cabs');


module.exports = Cabs;