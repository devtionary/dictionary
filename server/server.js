const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const defController = require('./controllers/definitionController');
const exampleController = require('./controllers/exampleController');
const commentController = require('./controllers/commentController');
const upvoteController = require('./controllers/UpvotesController');
const downvoteController = require('./controllers/DownvotesController');
const router = express.Router();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, '../dist')));

//authorization
app.post('/api/auth', userController.isUser);

//posts
app.post(
  '/api/definitions/',
  defController.addDef,
  exampleController.addExamples
);

app.post('/api/comments/', commentController.addComment);

app.post('/api/upvote', upvoteController.addUpvote);

app.post('/api/upvote', upvoteController.addUpvote);

//gets
app.get(
  '/api/definitions/:term',
  defController.getDef,
  exampleController.getExamples,
  commentController.getComments,
  upvoteController.getUpvotes,
  downvoteController.getDownvotes
);

app.get(
  '/api/users/:uId',
  defController.getUserDefs,
  exampleController.getExamples,
  commentController.getComments,
  upvoteController.getUpvotes,
  downvoteController.getDownvotes
);

app.get('api/definitions/requested', defController.getRequestedDefs);

//edits
app.delete('/api/definitions/:dId', defController.delete);

app.patch('/api/definitions/:dId', defController.update);

if (process.env.ENV_VARIABLE !== 'production') {
  app.listen(8080);
  console.log('listening on port 8080');
}

else {
  console.log('listening on port 8000')
}
module.exports = app;
