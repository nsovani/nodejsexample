var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema =  new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    location:{
        latitude: String,
        longitude: String
    },
    Stop: {
        name: {type: String, required: true},
        latitude: {type: String, required: true},
        longitude: {type: String, required: true}

    }
  });

var Users = mongoose.model('User', userSchema,'Users');


module.exports = Users;