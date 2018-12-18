const path = require('path');
const models = require('../models');
const definitions = models.definitions;

const definitionController = {};


definitionController.checkIfDefExists = (req, res) => {
  let entryTerm = req.body.term;
  let entryText = req.body.text;
  console.log('about to search for term');

  definitions.findOne({ where: {term: entryTerm, text: entryText} })
  .then(definition => {
    if(definition === null){
      console.log('term found')
      definitionController.addDef(req,res);
    }else{
      console.log('term not found')
      res.send(JSON.stringify(definition))
      
    }
  })
  .catch((err) => {
    return res.send(err);
  })
  }

definitionController.addDef = (req,res) => {
  let entryTerm = req.body.term;
  let entryText = req.body.text;
  let uId = req.body.id;

  definitions.create({uId: 1,term: entryTerm, text: entryText}).then((user) => {
      console.log("DEFINITION HAS BEEN CREATED");
      res.send(JSON.stringify(user))
      }).catch((err) => {
      console.log("ERROR!!!!!",err)
      })
}
  


  definitionController.getEntries = (req, res) => {

  }

  module.exports = definitionController;
  