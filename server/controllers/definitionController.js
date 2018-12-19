const path = require('path');
const models = require('../models');
const definitions = models.definitions;

const definitionController = {};

definitionController.getDef = (req, res, next) => {
  let entryTerm;

  if (req.method === 'POST') {
    entryTerm = req.body.term;
  }
  if (req.method === 'GET') {
    entryTerm = req.params.query_term;
  }

  definitions
    .findAll({ where: { term: entryTerm } })
    .then(definition => {
      if (definition === null) {
        console.log('term not found');
        next();
      } else {
        console.log('term found');
        res.send(JSON.stringify(definition));
      }
    })
    .catch(err => {
      return res.send(err);
    });
};

definitionController.findAll = (req, res) => {
  definitions
    .findAll()
    .then(user => {
      console.log('DEFINITIONs Found');
      res.send(JSON.stringify(user));
    })
    .catch(err => {
      console.log('ERROR!!!!!', err);
    });
};

definitionController.addDef = (req, res) => {
  let entryTerm = req.body.term;
  let entryText = req.body.text;
  let uId = req.body.id;

  definitions
    .create({ uId: uId, term: entryTerm, text: entryText })
    .then(user => {
      console.log('DEFINITION HAS BEEN CREATED');
      res.send(JSON.stringify(user));
    })
    .catch(err => {
      console.log('ERROR!!!!!', err);
    });
};

definitionController.delete = (req, res) => {
  let entryTerm = req.params.query_term;
  let id = req.params.query_value;

  definitions
    .destroy({ where: { id: id } })
    .then(rowDeleted => {
      if ((rowDeleted = 1)) {
        console.log('deleted successfuly');
        res.send('deleted successfuly');
      }
    })
    .catch(err => {
      console.log('ERROR!!!!', err);
    });
};

definitionController.update = (req, res) => {
  const id = req.params.query_value;
  const text = req.body.text;

  definitions
    .update({ text: text }, { where: { id: id } })
    .then(updatedRow => {
      res.json(updatedRow);
    })
    .catch(err => {
      console.log('ERROR!!!', err);
    });
};

module.exports = definitionController;
