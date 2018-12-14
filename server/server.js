const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost/dictionary', (err, database) => {
      // ... start the server
      var dbase = db.db("dictionary");
      
      app.listen(3000, () => console.log(`we live on port 3000`));
    })


const server = http.createServer(app)


app.get('/', function(req, res) {
  res.send("Yep it's working");
});

app.get('/love', function(req, res) {
  res.send("Love");
});

module.exports = app;
