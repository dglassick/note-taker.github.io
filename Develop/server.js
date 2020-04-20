// Dependet variables and nodes
const express = require("express");
const fs = require('fs');
const util = require('util');
var path = require("path");
fs.readFile = util.promisify(fs.readFile);
fs.writeFile = util.promisify(fs.writeFile);
const Guest = require('./index')

//Set up the port and express
var app = express();
const PORT= process.env.PORT || 3000;
//allows express to parse the data
app.use(express.urlencoded( { extended: true}));
app.use(express.json());

//Routes to the index.html and notes.html

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});