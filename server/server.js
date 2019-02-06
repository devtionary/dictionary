const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const defController = require('./controllers/definitionController');
const wordsController = require('./controllers/wordController');
// const exampleController = require('./controllers/exampleController');
const votesController = require('./controllers/votesController');
// const router = express.Router();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('hi');
});


//authorization
app.post('/api/auth/', userController.isUser);

//words

app.post(
  '/api/words/',
  wordsController.addTerm
);

app.get(
  '/api/words/:term',
  wordsController.getCertainWord
);

app.get(
  '/api/words/',
  wordsController.getAllWords
);

app.delete('/api/words/:wid', wordsController.delete);

app.patch('/api/words/:wid', wordsController.update);

//definitions

app.get(
  '/api/definitions/',
  defController.getDefByQueryType
);

// app.get(
//   '/api/definitions/:uid',
//   defController.getUserDefs
// );

app.post(
  '/api/definitions/',
  defController.addDef
);

app.delete(
  '/api/definitions/:did',
  defController.delete
);

app.patch(
  '/api/definitions/:did',
  defController.update
);


app.post(
  '/api/votes/', 
  votesController.voteAction
);

app.get(
  '/api/votes/',
  votesController.getDefVotes
);

// //gets
// app.get(
//   '/api/definitions/:term',
//   defController.getDef,
//   exampleController.getExamples,
//   upvoteController.getUpvotes,
// );

// app.get(
//   '/api/users/:uId',
//   defController.getUserDefs,
//   exampleController.getExamples,
//   upvoteController.getUpvotes,
// );

// app.get('api/definitions/requested', defController.getRequestedDefs);

// //edits


if (process.env.NODE_ENV !== 'production') {
  app.listen(8080);
  console.log('listening on port 8080');
}

else {
  console.log('listening on port 8000')
}
module.exports = app;
