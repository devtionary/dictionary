const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const Users = require('./models/user-model.js')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/dictionary');
mongoose.connection.once('open', () => {
  console.log('Connected with dictionary db');
});



let newUser = {
  userName: "Altai",
  password: "giraffe",
  entries: "a, b, c",
  badEntries: 3
}

let userDoc = new Users(newUser);

userDoc.save((err) => {
  if (err) return handleError(err);
});
// MongoClient.connect('mongodb://localhost/dictionary', (err, database) => {
//       // ... start the server
//   // var dbase = db.db("dictionary");
//   if (err) return console.log(err);
//   app.listen(3000, () => console.log(`we live on port 3000`));
// })
//
// mongoose.connection.once('open', () => {
//   console.log('connected with MongoDB Dictionary')
// })
//
// const server = http.createServer(app)
//
// app.post('/signup', (req, res, next) => {
//
//   var user = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name
//   };
//
//   dbase.collection("users").save(user, (err, result) => {
//     if(err) {
//       console.log(err);
//     }
//
//     res.send('user added successfully');
//   });
// });
//
// app.get('/', function(req, res) {
//   res.send("Yep it's working");
// });

app.get('/love', function(req, res) {
  res.send("Love");
});

module.exports = app;
