const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const controller = require("./controller");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/dictionary');
mongoose.connection.once('open', () => {
  console.log('Connected with dictionary db!!!!!!!!!!!!!!!!!!');
});


app.post('/addentry', (req, res) => {
  res.send(req.body)
})
app.post('/signin', controller.isUser, (req, res, err) => {
  console.log(err)
})

app.post('/signup', controller.addUser, (req, res, err) => {
  console.log(err)
})


app.listen(8080, () => {
  console.log("listening on 8080")
})

module.exports = app;
