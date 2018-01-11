var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var config=require('./config/default.js');
console.log("env " + process.env.NODE_ENV);
var _ = require("lodash");
var config = require("./config/" + (process.env.NODE_ENV || "openshiftprd") + ".js");
console.log("db " + config.db.connectString);
console.log("port " +config.server.port);
module.exports = _.merge({}, config);


var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

mongoose.connect(config.db.connectString);

app.listen(config.server.port);
var userrouting = require('./routing/userrouting');
app.use('/users', userrouting);
var stoprouting = require('./routing/stoprouting');
app.use('/stops', stoprouting);
var landmarkrouting = require('./routing/landmarkrouting');
app.use('/landmarks', landmarkrouting);
var routerouting = require('./routing/routerouting');
app.use('/routes', routerouting);
var cabrouting = require('./routing/cabrouting');
app.use('/cabs', cabrouting);