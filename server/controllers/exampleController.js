const path = require('path');
const models = require('../models');
const examples = models.Examples;

const exampleController = {}

//get all examples for array of definitions
exampleController.getExamples = (req,res,next) => {
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
    //   res.send(JSON.stringify(data));
      res.locals.dataList = data;
      next();
    })
  
  }

  
  //create all examples for definition
exampleController.addExamples = (req,res,next) => {
    let definition = res.locals.definition;
    let sentenceArr = req.body.sentences;
    const promiseArr = [];
  
    sentenceArr.forEach((e) => {
      console.log('creating examples')
      const a = new Promise((resolve,reject) => {
        examples.create({uId: definition.uId, dId: definition.id, text: e})
        .then((example) => {
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
      res.send(JSON.stringify(defObj));
    })
  }

  module.exports = exampleController;
  