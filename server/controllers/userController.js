const models = require("../models");
const path = require('path');
const Sequelize = require('sequelize');
const fetch = require('node-fetch');

const Users = models.users;
const userController = {};


  userController.isUser = (req, res) => {
    const googleId = req.body.profileObj.googleId;
    console.log('isUser', googleId);
    //check if user exists alredy
    Users.findOne({ where: {googleId: googleId} }).then(user => {
      if(user === null){
        userController.addUser(req,res);
      }else{
        res.send(JSON.stringify(user))
      }
    })
  }
  
  
  userController.addUser = (req, res) => {
    const email = req.body.profileObj.email;
    const avatar = req.body.profileObj.imageUrl;
    const googleId = req.body.profileObj.googleId;

      fetch('https://randomuser.me/api/')
    .then(function(response) {
      return response.json();
    })
    .then((myJson) => {
      const username = myJson.results[0].login.username;
      console.log(username);
      return username
    }).then((username) => {
      Users.create({googleId: googleId,
                   username: username,
                   email: email, 
                   avatar: avatar })
                   .then((user) => {
                     console.log("USER HAS BEEN CREATED");
                     res.send(JSON.stringify(user))
      }).catch((err) => {
        console.log("ERROR!!!!!",err)
      })
    })
  }




  module.exports = userController;





  