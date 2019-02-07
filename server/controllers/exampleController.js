const db = require('./index.js');

const exampleController = {};

//get all examples for array of definitions
exampleController.getExamplesForDefs = (req, res, next) => {
  const defs = [];
  for (let did of Object.keys(res.locals.defs)) {
    defs.push(did);
  }
  // const query = {
  //   text: `describe from "Examples" where dId = ANY ($1)`,
  //   values: [defs],
  // };

  // console.log(query);
  // db.query(query)
  //   .then(result => {
  //     res.send(result.rows);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     res.status(500).end();
  //   });
  for (let did of Object.keys(res.locals.defs)) {
    res.locals.defs[did].examples = [];
  }
  next();
};

//create all examples for definition
exampleController.addExamples = (req, res, next) => {};

//create all example for definition
exampleController.addExample = (req, res, next) => {};

module.exports = exampleController;
