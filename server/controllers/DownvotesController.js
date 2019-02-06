const path = require('path');
const models = require('../models');
const downvotes = models.Downvotes;

const downvotesController = {};

downvotesController.addDownvote = (req, res, next) => {
  let dId = req.body.dId;
  let text = req.body.text;
  let uId = req.body.uId;

  downvotes.findOne({ where: { uId: uId } }).then(vote => {
    if (vote === null) {
      downvotes.create({ dId: dId, uId: uId, text: text }).then(downvote => {
        res.send(JSON.stringify(downvote));
      });
    }
  });
};

downvotesController.getDownvotes = (req, res, next) => {
  const data = res.locals.dataList;
  const promiseArr = [];

  data.forEach(e => {
    const a = new Promise((resolve, reject) => {
      downvotes
        .findAll({ where: { dId: e.id } })
        .then(list => {
          e.thumbsDown = list.length;
          resolve(e);
        })
        .catch(err => {
          console.log('!!!!!!!!!!!', err);
        });
    });
    promiseArr.push(a);
  });

  Promise.all(promiseArr).then(data => {
    res.locals.dataList = data;
    res.send(JSON.stringify(data));
  });
};

module.exports = downvotesController;
