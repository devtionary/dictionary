const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require("./controllers/userController");

// 
const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres://ktzvzasy:HFcXuVJJN5V7H2Iy9FUFbwwKRZBbk_o-@baasu.db.elephantsql.com:5432/ktzvzasy',{
//   dialect: 'postgres'
// });
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
})
// app.post('/addentry', controller.addEntry)
app.post('/api/auth', userController.isUser)
// app.post('/api/addUser', userController.addUser)
// app.post('/api/signup', controller.addUser)


app.listen(8080, () => {
  console.log("listening on 8080")
})

module.exports = app;
