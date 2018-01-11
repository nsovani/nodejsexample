var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StopSchema =  new Schema({
    name: {type: String, required: true},
    latitude: {type: String, required: true},
    longitude: {type: String, required: true}
  });

var Stops = mongoose.model('Stop', StopSchema,'Stops');

module.exports = Stops;
