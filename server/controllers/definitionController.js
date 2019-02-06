const path = require('path');
const models = require('../models');
const definitions = models.definitions;
const examples = models.Examples;

const definitionController = {};

//get requested definition (empty text)
definitionController.getRequestedDefs = (req, res, next) => {
  definitions
    .findAll({ where: { text: '' } })
    .then(list => {
      if (list === null) {
        console.log('no requested definitions');
        res.send(null);
      } else {
        console.log('found requested definitions');
        res.send(JSON.stringify(list));
      }
    })
    .catch(err => {
      return res.send(err);
    });
};

//search for a definition by term
definitionController.getDef = (req, res, next) => {
  console.log(req.params.term);
  let entryTerm;
  if (req.method === 'POST') {
    entryTerm = req.body.term;
  }
  if (req.method === 'GET') {
    entryTerm = req.params.term;
  }

  console.log('entry term', entryTerm);

  definitions
    .findAll({ where: { term: entryTerm } })
    .then(list => {
      if (list.length === 0) {
        console.log('term not found');
        res.status(404).send([]);
      } else {
        console.log('term found');
        res.locals.defList = list;
        next();
      }
    })
    .catch(err => {
      return res.send(err);
    });
};

//get all definitions from a user
definitionController.getUserDefs = (req, res, next) => {
  const userId = req.params.uId;

  definitions
    .findAll({ where: { uId: userId } })
    .then(list => {
      if (list === null) {
        console.log('user has no definitions');
        res.send(null);
      } else {
        console.log('found user definitions');
        // res.send(JSON.stringify(list));
        res.locals.defList = list;
        next();
      }
    })
    .catch(err => {
      return res.send(err);
    });
};

//create definition
definitionController.addDef = (req, res, next) => {
  let entryTerm = req.body.term;
  let entryText = req.body.text;
  let uId = req.body.id;

  definitions
    .create({ uId: uId, term: entryTerm, text: entryText })
    .then(definition => {
      console.log('DEFINITION HAS BEEN CREATED: ', definition.id);
      res.locals.definition = definition;
      // res.send(JSON.stringify(definition));
      next();
    })
    .catch(err => {
      console.log('ERROR!!!!!', err);
    });
};

//delete definition by id
definitionController.delete = (req, res) => {
  let id = req.params.dId;

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

//update definition
definitionController.update = (req, res) => {
  const id = req.params.dId;
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
