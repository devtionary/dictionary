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


app.post('/addentry', (req, res) => {
  res.send(req.body)
})
app.post('/signin', (req, res) => {

  res.send({ 'isUser': true })
})



app.listen(8080, () => {
  console.log("listening on 8080")
})

module.exports = app;
