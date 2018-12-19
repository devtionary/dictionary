const path = require('path');
const models = require('../models');
const definitions = models.definitions;
const examples = models.Examples;

const definitionController = {};

//search for a definition by term
definitionController.getDef = (req, res,next) => {
  let entryTerm

  if(req.method === "POST"){
   entryTerm = req.body.term;
  }
  if(req.method === "GET"){
   entryTerm = req.params.term
  }

  definitions.findAll({ where: {term: entryTerm} })
    .then(list => {
      if(list === null){
        console.log('term not found')
        res.send(null)
      }else{
        console.log('term found')
        // res.send(JSON.stringify(definition));
        res.locals.defList = list;
        next();
      }
   })
   .catch((err) => {
     return res.send(err);
   })
  }


//get all definitions from a user
definitionController.getUserDefs = (req,res,next) => {
  const userId = req.params.uId;

  definitions.findAll({where: {uId: userId}})
      .then((list) => {
        if(list === null){
          console.log('user has no definitions');
          res.send(null);
        }else{
          console.log('found user definitions');
          // res.send(JSON.stringify(list));
          res.locals.defList = list;
          next();
        }
      })
      .catch((err) => {
        return res.send(err);
      })
}

//get all examples for array of definitions
definitionController.getDefsExamples = (req,res,next) => {
  const defList = res.locals.defList;
  const promiseArr = [];

  defList.forEach((e) => {
    const a = new Promise((resolve,reject) => {
      examples.findAll({where:{dId:e.id}}).then((list) => {
        const defObj = {
          definition: e,
          examples: list
        }
        resolve(defObj)
      })
    });
    promiseArr.push(a);
  });

  Promise.all(promiseArr).then((data) => {
    console.log('=========', data);
    res.send(JSON.stringify(data));
  })

}

  
//create definition
definitionController.addDef = (req,res,next) => {
  let entryTerm = req.body.term;
  let entryText = req.body.text;
  let uId = req.body.id;

  definitions.create({uId: uId,term: entryTerm, text: entryText})
    .then((definition) => {
      console.log("DEFINITION HAS BEEN CREATED: ",definition.id);
      res.locals.definition = definition;
      // res.send(JSON.stringify(definition));
      next();
    })
    .catch((err) => {
      console.log("ERROR!!!!!",err)
    })
}

//create all examples for definition
definitionController.addExamples = (req,res,next) => {
  let definition = res.locals.definition;
  let sentenceArr = req.body.sentences;
  const promiseArr = [];

  sentenceArr.forEach((e) => {
    console.log('creating examples')
    const a = new Promise((resolve,reject) => {
      examples.create({uId: definition.uId, dId: definition.id, text: e})
      .then((example) => {
        console.log(example, '!!!!!!!!!!!!!!!')
        resolve(example);
      })
      .catch((err) => console.log(err))
    });
    promiseArr.push(a);
  })

  Promise.all(promiseArr).then((examplesArr) => {
    const defObj = {
      definition: definition,
      examples: examplesArr
    }
    res.send(JSON.stringify(defObj))
  })
}









//delete definition by id
definitionController.delete = (req,res) => {
  let id = req.params.dId;

  definitions.destroy({where: {id: id}}).then((rowDeleted) => {
    if(rowDeleted = 1){
      console.log('deleted successfuly');
      res.send('deleted successfuly');
    }
  }).catch((err) => {
    console.log('ERROR!!!!', err);
  })
}

definitionController.update = (req,res) => {
  const id = req.params.query_value;
  const text = req.body.text;

  definitions.update({text:text},{where: {id:id}}).then((updatedRow) => {
    res.json(updatedRow)
  }).catch((err) => {
    console.log('ERROR!!!', err)
  })
}





  module.exports = definitionController;
  