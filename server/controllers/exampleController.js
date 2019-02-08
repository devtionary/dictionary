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
            id: e.id,
            date: e.createdAt,
            term: e.term,
            description: e.text,
            examples: list
          }
          resolve(defObj)
        })
      });
      promiseArr.push(a);
    });
  
    Promise.all(promiseArr).then((data) => {
      console.log('====examples =====', data);
      res.locals.dataList = data;
      next();
    })

    // const did = req.query.did;
    
    // const query = {
    //   name: 'check-votes-by-user',
    //   text:
    //     'SELECT did, COUNT(uid), typeofvote FROM votes GROUP BY did, typeofvote ORDER BY did;',
    //   values: [did],
    // };
    // db.query(query)
    //   .then(result => {
    //     console.log('VOTES EXIST BY USER');
    //     res.send(result.rows);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     res.status(500).end();
    //   });
  }

  
  //create all examples for definition
exampleController.addExamples = (req,res,next) => {
    let def = res.locals.definition;
    let sentenceArr = req.body.sentences;
    const promiseArr = [];
  
    sentenceArr.forEach((e) => {
      console.log('creating examples')
      const a = new Promise((resolve,reject) => {
        examples.create({uId: def.uId, dId: def.id, text: e})
        .then((example) => {
          resolve(example);
        })
        .catch((err) => console.log(err))
      });
      promiseArr.push(a);
    })
  
    Promise.all(promiseArr).then((examplesArr) => {
      const defObj = {
        id: def.id,
        date: def.createdAt,
        term: def.term,
        description: def.text,
        examples: examplesArr
      }
      res.send(JSON.stringify(defObj));
    })
  }

  module.exports = exampleController;
  