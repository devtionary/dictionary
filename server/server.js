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

app.get('/api/definitions/', defController.findAll);
app.post('/api/definitions/', defController.addDef);

app.get('/api/definitions/:query_term', defController.getDef, (req, res) => {
  res.send(null);
});

app.delete('/api/definitions/:query_value', defController.delete);

app.patch('/api/definitions/:query_value', defController.update);

module.exports = app;
