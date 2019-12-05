"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var PORT = 4000;
app.set('port', PORT);
app.get('/', function (req, res) {
    res.send('hello world');
});
app.listen(app.get('port'), function (err) {
    if (err)
        throw "Error:" + err.message;
    console.log("server running in http://localhost:" + app.get('port'));
});
