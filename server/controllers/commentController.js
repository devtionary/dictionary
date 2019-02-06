const path = require('path');
const models = require('../models');
const comments = models.Comments;
const Users = models.users;

const commentsController = {}

commentsController.addComment = (req,res,next) => {
    let dId = req.body.dId;
    let text = req.body.text;
    let uId = req.body.uId;
    
    comments.create({dId:dId,uId: uId,text:text})
            .then((comment) => {
                res.send(JSON.stringify(comment))
            });
}

commentsController.getComments = (req,res,next) => {
    const data = res.locals.dataList;
    const promiseArr = [];

    data.forEach((e) => {
        const a = new Promise((resolve,reject) => {
            comments.findAll({where: {dId: e.id}})
                    .then((list) => {
                        e.comments = list;
                        resolve(e);
                    })
                    .catch((err) => {
                        console.log('!!!!!!!!!!!',err);
                    })
        })
        promiseArr.push(a);
    })

    Promise.all(promiseArr).then((data) => {
        console.log('=====comments==',data)
        res.locals.dataList = data;
        next();
    })
}

// commentsController.getComments = (req,res,next) => {
//     const data = res.locals.dataList;
//     const promiseArr = [];

//     data.forEach((e) => {
//         const a = new Promise((resolve,reject) => {
//             comments.findAll({where: {dId: e.id},
//                             include: [
//                                 {model:users}
//                          ]
//                      })
//                     .then((list) => {
//                         e.comments = list;
//                         resolve(e);
//                     })
//                     .catch((err) => {
//                         console.log('!!!!!!!!!!!',err);
//                     })
//         })
//         promiseArr.push(a);
//     })

//     Promise.all(promiseArr).then((data) => {
//         res.locals.dataList = data;
//         next()
//     })
// }






module.exports = commentsController;
  