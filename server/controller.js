const Users = require("./userModel.js");
const Entries = require("./entryModel.js");
const path = require('path');
const controller = {};

controller.addEntry = (req, res) => {

  new Entries({
    term: `${req.body.term}`,
    definition: `${req.body.definition}`,
    upvotes: req.body.upvotes,
    downvotes: req.body.downvotes,
    createdBy: `${req.body.createdBy}`,
    tags: []
  }).save(err => {
    if (err) {
      console.log(err)
    }
  })
  res.send(req.body)
}

controller.getEntries = (req, res) => {
  Entries.find({}, (err, entries) => {
    res.send(entries);
  })
}



controller.isUser = (req, res) => {
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


controller.addUser = (req, res) => {
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




module.exports = controller;
