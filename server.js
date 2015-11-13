var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

var messages = [];

app.options("/", function(req, res) {
    res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }).send();
});

app.get("/", function(req, res) {
	res.status(200).set({
	'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"	
	}).send(JSON.stringify(messages));
});

app.post("/", function(req, res) {
    messages.push({
        message: req.body.message,
        time: new Date()
        });
    
    res.status(200).set({
	'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"	
	}).send(JSON.stringify(messages));
});

app.listen(8888, function() {
	console.log("listening on port 8888");
});
