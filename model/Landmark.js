var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LandmarkSchema =  new Schema({
    name: {type: String, required: true},
    latitude: {type: String, required: true},
    longitude: {type: String, required: true}
  });

var Landmarks = mongoose.model('Landmark', LandmarkSchema,'Landmarks');

module.exports = Landmarks;
