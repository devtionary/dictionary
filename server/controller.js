const Users = require("./models.js");
const Entries = require("./models.js");
const path = require('path');
const controller = {};


// let entryDoc = new Entries(newEntry);
// let userDoc = new Users(newUser);
// entryDoc.save((err) => {
//   if (err) return handleError(err)

// })
// userDoc.save((err) => {
//   if (err) return handleError(err);
// });

controller.isUser = (req, res, next) => {
  //some logic to determine if isUser: true
  Users.findOne({ username: `${req.body.username}` }, "username", (err, user) => {
    if (user === null) {
      res.send({ isUser: false })
    } else {
      res.send({ isUser: true, user: user.username })
    }
  })

  next();
}


controller.addUser = (req, res, next) => {
  Users.findOne({ username: `${req.body.username}`, password: `${req.body.password}` }, "username", (err, user) => {
    if (user === null) {
      new Users({
        username: `${req.body.username}`,
        password: `${req.body.password}`
      }).save((err) => {
        if (err) {
          return handleError(err)
        }
      })
      res.send({ userAlready: false })
    } else {
      res.send({ userAlready: true })
    }
  })
  next();

}




module.exports = controller
