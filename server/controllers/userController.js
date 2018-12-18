const Users = require("../models/userModel.js");
const path = require('path');
const userController = {};


userController.isUser = (req, res) => {
    //some logic to determine if isUser: true
    Users.findOne({ username: `${req.body.username}`, password: `${req.body.password}` }, "username", (err, user) => {
      if (user === null) {
        console.log(user);
        res.send({ isUser: false })
      } else {
        res.send({ isUser: true, user: user.username })
      }
    })
  }
  
  
  userController.addUser = (req, res) => {
    Users.findOne({ username: `${req.body.username}` }, "username", (err, user) => {
      if (user === null) {
        new Users({
          username: `${req.body.username}`,
          password: `${req.body.password}`
        }).save((err) => {
          if (err) {
            console.log(err)
          }
        })
        res.send({ userAlready: false })
      } else {
        res.send({ userAlready: true })
      }
    })
  }

  module.exports = userController;