const path = require('path');
const models = require('../models');
const upvotes = models.Upvotes;

const upVotesController = {}

upVotesController.addUpvote = (req,res,next) => {
    let dId = req.body.dId;
    let text = req.body.text;
    let uId = req.body.uId;
    

    upvotes.findOne({where:{uId: uId}}).then((vote) => {
        if(vote === null){
            upvotes.create({dId:dId,uId: uId,text:text})
            .then((upvote) => {
                res.send(JSON.stringify(upvote))
            })
            .catch(err => console.log(err))
        }else{
            res.send(null)
        }
    })
}

upVotesController.getUpvotes = (req,res,next) => {
    const data = res.locals.dataList;
    const promiseArr = [];

    data.forEach((e) => {
        const a = new Promise((resolve,reject) => {
            upvotes.findAll({where: {dId: e.id}})
                    .then((list) => {
                        e.thumbsUp = list.length;
                        resolve(e);
                    })
                    .catch((err) => {
                        console.log('!!!!!!!!!!!',err);
                    })
        })
        promiseArr.push(a);
    })

    Promise.all(promiseArr).then((data) => {
        res.locals.dataList = data;
        console.log('====upvotes===',data)
        next();
        // res.send(JSON.stringify(data));
    })
}




module.exports = upVotesController;
  