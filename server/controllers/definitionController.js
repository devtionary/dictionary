const path = require('path');
const models = require('../models');
const definitions = models.definitions;

const definitionController = {};


definitionController.getDef = (req, res,next) => {
  if(req.method === "POST"){
    let entryTerm = req.body.term;
  }
  if(req.method === "GET"){
    let entryTerm = req.params.query_term
  }

  definitions.findOne({ where: {term: entryTerm} })
    .then(definition => {
      if(definition === null){
        console.log('term found')
        next();
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

  definitions.create({uId: 1,term: entryTerm, text: entryText})
    .then((user) => {
      console.log("DEFINITION HAS BEEN CREATED");
      res.send(JSON.stringify(user))
    })
    .catch((err) => {
      console.log("ERROR!!!!!",err)
    })
}


definitionController.delete = (req,res) => {
  let entryTerm = req.params.query_term;
  definitions.destroy({where: {term: entryTerm}}).then((rowDeleted) => {
    if(rowDeleted = 1){
      console.log('deleted successfuly');
      res.send('deleted successfuly');
    }
  }).catch((err) => {
    console.log('ERROR!!!!', err);
  })
}





  module.exports = definitionController;
  