const Users = require("./models.js");
const Entries = require("./models.js");
const path = require('path');
const controller = {};

controller.addEntry = (req, res) => {

  new Entries({
    term: `${req.body.term}`,
    definition: `${req.body.definition}`,
    upVotes: req.body.upVotes,
    downVotes: req.body.downVotes,
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
  Users.find({}, (err, entries) => {
    res.send(entries)
  })
}



controller.isUser = (req, res) => {
  //some logic to determine if isUser: true
  Users.findOne({ username: `${req.body.username}` }, "username password", (err, user) => {
    if (user === null || user.password !== req.body.password) {
      res.send({ isUser: false })
    } else {
      res.send({ isUser: true, user: user.username })
    }
  })
}


controller.addUser = (req, res) => {
  Users.findOne({ username: `${req.body.username}`, password: `${req.body.password}` }, "username", (err, user) => {
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




module.exports = controller
