const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const Users = require('./models/user-model.js')
const Entries = require('./models/entries-model.js')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/dictionary');
mongoose.connection.once('open', () => {
  console.log('Connected with dictionary db');
});



// let newUser = {
//   userName: "Leury",
//   password: "kittens88",
//   entries: "yada, yada, yoo",
//   badEntries: 44
// }
// let userDoc = new Users(newUser);
//
// userDoc.save((err) => {
//   if (err) return handleError(err);
// });

// let newEntry = {
//   term: 'gtegte',
//   definition: 'yyyyy',
//   upVotes: 2,
//   downVotes: 2,
//   createdBy: 'aiDaMon',
//   tags: ['v', 'e', 'd']
// }
// let entryDoc = new Entries(newEntry);
// entryDoc.save((err) => {
//   if (err) return handleError(err)
// });

// Entries.deleteOne({"term": {$eq: 'yolo'} }, (err) => {
//   if (err) return handleError(err)
// })

Entries.update(
  {term: 'gtegte' },
  {$set:
    {
      definition: "tree"
    }
  },
  {
    upsert: true
  }
)

app.get('/love', function(req, res) {
  res.send("Love");
});

module.exports = app;
