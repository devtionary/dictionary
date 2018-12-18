const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require("./controllers/userController");
const defController = require("./controllers/definitionController");


const Sequelize = require('sequelize');

const sequelize = new Sequelize('dictionary', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req,res) => {
  res.send('hi')
});

app.post('/api/auth', userController.isUser);

app.post('/api/definitions/',defController.getDef,defController.addDef)

app.get('/api/definitions/:query_term',defController.getDef,(req,res) => {
  res.send(null);
});

app.listen(8080, () => {
  console.log("listening on 8080")
})

module.exports = app;
