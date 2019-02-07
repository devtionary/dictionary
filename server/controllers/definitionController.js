const path = require('path');
// const models = require('../models');
// const definitions = models.definitions;
// const examples = models.Examples;
const db = require('./index.js');

const definitionController = {};

//get requested definition (empty text)
definitionController.getAllDefs = (req, res, next) => {
  // definitions
  //   .findAll({ where: { text: '' } })
  //   .then(list => {
  //     if (list === null) {
  //       console.log('no requested definitions');
  //       res.send(null);
  //     } else {
  //       console.log('found requested definitions');
  //       res.send(JSON.stringify(list));
  //     }
  //   })
  //   .catch(err => {
  //     return res.send(err);
  //   });
};

//get top def
definitionController.getDefsForWords = (req, res, next) => {
  let i = 0;
  let words = [];
  for (let word of res.locals.words) {
    words.push(word.id);
  }
  const query = {
    text: `SELECT * from definitions where wId = ANY ($1)`,
    values: [words]
  };
  db.query(query)
    .then(result => {
      //query all the definitions
      let defsReduced = result.rows.reduce((acc, elem) => {
        acc[elem.id] = elem; // or what ever object you want inside
        return acc;
      }, {});
      res.locals.defs = defsReduced;
      next();
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

//search for all definitions by term
definitionController.getDefByQueryType = (req, res, next) => {
  console.log(req.query);
  if (req.query.wid !== undefined && req.query.wid !== null) {
    let wid = req.query.wid;
    const query = {
      name: 'get-term-definition-by-wid',
      text: 'SELECT * FROM definitions WHERE wid = $1',
      values: [wid],
    };
    db.query(query)
      .then(result => {
        //query all the definitions
        let defsReduced = result.rows.reduce((acc, elem) => {
          acc[elem.id] = elem; // or what ever object you want inside
          return acc;
        }, {});
        res.locals.defs = defsReduced;
        next();
      })
      .catch(err => {
        console.error(err);
        res.status(500).end();
      });
  } else {
    let uid = req.query.uid;
    const query = {
      name: 'get-term-definition-by-uid',
      text: 'SELECT * FROM definitions WHERE uid = $1',
      values: [uid],
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
  }
};

//get all definitions from a user
definitionController.getUserDefs = (req, res, next) => {
  let uid = req.params.uid;
  const query = {
    name: 'get-term-definition',
    text: 'SELECT * FROM definitions WHERE uid = $1',
    values: [uid],
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

//create definition
//do I need to check for duplicates?
definitionController.addDef = (req, res, next) => {
  let entryText = req.body.text;
  let uid = req.body.uid;
  let wid = req.body.wid;
  console.log(uid, entryText);
  let queryStr = 'INSERT INTO definitions(text, wid, uid) VALUES($1, $2, $3)';
  const query = {
    name: 'add-new-term',
    text: queryStr,
    values: [entryText, wid, uid],
  };
  db.query(query)
    .then(result => {
      console.log('USER HAS ADDED DEFINITION');
      res.send(result);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

//delete definition by id
definitionController.delete = (req, res) => {
  let did = req.params.did;

  let queryStr = 'DELETE FROM definitions WHERE id = $1';
  const query = {
    name: 'delete-definition',
    text: queryStr,
    values: [did],
  };
  db.query(query)
    .then(result => {
      console.log('USER HAS DELETED DEFINITION');
      res.send(result);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

//update definition
definitionController.update = (req, res) => {
  const did = req.params.did;
  const updateToText = req.body.text;

  let queryStr = 'UPDATE definitions SET text = $1 WHERE id = $2';
  const query = {
    name: 'update-definition',
    text: queryStr,
    values: [updateToText, did],
  };
  db.query(query)
    .then(result => {
      console.log('USER HAS UPDATED DEFINITION');
      res.send(result);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};

module.exports = definitionController;
