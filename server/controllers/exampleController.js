const db = require('./index.js');

const exampleController = {};

//get all examples for array of definitions
exampleController.getExamplesForDefs = (req, res, next) => {
  res.send(res.locals.defs);

 
};

//create all examples for definition
exampleController.addExamples = (req, res, next) => {};

//create all example for definition
exampleController.addExample = (req, res, next) => {};

module.exports = exampleController;
