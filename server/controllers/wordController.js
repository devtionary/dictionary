const path = require('path');
// const models = require('../models');
// const definitions = models.definitions;
// const examples = models.Examples;
const db = require('./index.js');

const wordController = {};

//get all words
wordController.getAllWords = (req, res, next) => {
  let queryStr = 'SELECT * FROM words';
  const query = {
    name: 'get-all-words',
    text: queryStr,
  };
  db.query(query)
    .then(result => {
      //query all the definitions
      console.log(result);
      res.send(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

//search for a word
wordController.getCertainWord = (req, res, next) => {
  console.log(req.params.term);
  let entryTerm = req.params.term;

  console.log('entry term', entryTerm);

  let queryStr = 'SELECT * FROM words WHERE term = $1';
  const query = {
    name: 'get-certain-words',
    text: queryStr,
    values: [entryTerm],
  };
  db.query(query)
    .then(result => {
      //query all the words
      res.send(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

//search for word to build
wordController.getWordById = (req, res, next) => {
  let queryStr = `SELECT * FROM words WHERE id = ${res.locals.wid}`;
  const query = {
    name: `get-certain-word-${res.locals.wid}`,
    text: queryStr,
  };
  db.query(query)
    .then(result => {
      //query all the words
      res.locals.word = result.rows[0];
      res.locals.uid = result.rows[0].uid;
      next();
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

//search for word and its similarities
wordController.getRelatedWords = (req, res, next) => {
  console.log(req.params.term);
  let entryTerm = req.params.term;

  console.log('entry term', entryTerm);

  let queryStr = `SELECT * FROM words WHERE term LIKE '%${entryTerm}%';`;
  const query = {
    text: queryStr,
  };
  db.query(query)
    .then(result => {
      //query all the words
      if (result.rows.length > 0) {
        res.locals.words = result.rows;
        next();
      } else res.send([]); //Send an empty array if the word wasn't found
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

//create word
wordController.addTerm = (req, res, next) => {
  let entryTerm = req.body.term;
  let uid = req.body.uid;
  console.log(uid, entryTerm);
  let queryStr = 'SELECT * FROM words WHERE term = $1';
  const query = {
    name: 'get-certain-words',
    text: queryStr,
    values: [entryTerm],
  };
  db.query(query)
    .then(result => {
      //query all the definitions
      if (result.rows.length <= 0) {
        let queryStr = 'INSERT INTO words(term, uid) VALUES($1, $2)';
        const query = {
          name: 'add-new-term',
          text: queryStr,
          values: [entryTerm, uid],
        };
        db.query(query)
          .then(result => {
            console.log('USER HAS ADDED WORD');
            res.send(result);
          })
          .catch(err => {
            console.error(err);
            res.status(500).end();
          });
      } else {
        res.send('word already exists');
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

//delete word by id
wordController.delete = (req, res) => {
  let wid = req.params.wid;

  let queryStr = 'DELETE FROM words WHERE id = $1';
  const query = {
    name: 'delete-term',
    text: queryStr,
    values: [wid],
  };
  db.query(query)
    .then(result => {
      console.log('USER HAS DELETED WORD');
      res.send(result);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

//update definition
wordController.update = (req, res) => {
  const wid = req.params.wid;
  const updateToTerm = req.body.term;

  let queryStr = 'UPDATE words SET term = $1 WHERE id = $2';
  const query = {
    name: 'update-term',
    text: queryStr,
    values: [updateToTerm, wid],
  };
  db.query(query)
    .then(result => {
      console.log('USER HAS UPDATED WORD');
      res.send(result);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

module.exports = wordController;
