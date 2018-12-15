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



let newUser = {
  userName: "L",
  password: "kittens88",
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


app.listen(8080, () => {
  console.log("listening on 8080")
})

module.exports = app;
