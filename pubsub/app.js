'use strict';

var express = require('express');
var app = express();
var badges = require('./controllers/badges');
app.use(express.json());

//badges is the middleware
app.post('/', badges.save, badges.send, function(req, res){
	res.send('\ndone\n\n');
});

app.get('/badges', badges.get);
app.listen(8000);
