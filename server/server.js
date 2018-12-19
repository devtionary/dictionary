const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const defController = require('./controllers/definitionController');
const router = express.Router();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('hi');
});

app.post('/api/auth', userController.isUser);

app.post('/api/definitions/',defController.addDef,defController.addExamples)


app.get('/api/definitions/:term',defController.getDef,defController.getDefsExamples)

app.get('/api/users/:uId',defController.getUserDefs,defController.getDefsExamples)

app.delete('/api/definitions/:dId',defController.delete)

app.patch('/api/definitions/:dId',defController.update);

app.patch('/api/definitions/:query_value', defController.update);

module.exports = app;
