const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const Users = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/dictionary');
mongoose.connection.once('open', () => {
  console.log('Connected with dictionary db!!!!!!!!!!!!!!!!!!');
});

app.get('/', function (req, res) {
  res.send("Love");
});


<<<<<<< HEAD
let newUser = {
  userName: "Bryan",
  password: "khbliblb",
=======

let newUser = {
  userName: "L",
  password: "kittens88",
>>>>>>> a0a1be766e137e0bebe4444c32c695e6f73a85a5
  entries: "yada, yada, yoo",
  badEntries: 44
}
let userDoc = new Users(newUser);

userDoc.save((err) => {
  if (err) return handleError(err);
});

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

<<<<<<< HEAD
// Entries.findOneAndUpdate({term: 'callback hell'},
//                           {$set: {definition: 'tree'}},
//                           {new: true},
//                           (err, doc) => {
//                             if (err) {
//                               return handleError(err);
//                             }
// });
=======
>>>>>>> a0a1be766e137e0bebe4444c32c695e6f73a85a5

app.listen(8080, () => {
  console.log("listening on 8080")
})

module.exports = app;
