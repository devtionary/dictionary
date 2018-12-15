const Users = require("./models.js");
const Entries = require("./models.js");
const path = require('path');
const controller = {};
// const entryController = {};


controller.addUser = (req, res, next) => {
  // let userDoc = new Users(newUser);
  // userDoc.save((err) => {
  //   if (err) return handleError(err);
  // });
  console.log('bananas')
}

controller.deleteUser = (req, res, next) => {
  Users.deleteOne({key: {$eq: "value"} }, (err) => {
    if (err) return handleError(err)
  })
}

controller.updateUser = (req, res, next) => {
  Users.findOneAndUpdate({userName: 'userName'}, {$set: {entries: "update value"}}, {new: true},
  (err, doc) => {
    if (err) {
      return handleError(err);
    }
  })
}


controller.addEntry = (req, res, next) => {
  console.log("**req.body**", req.body)
  let entryDoc = new Entries(req.body);
  entryDoc.save((err) => {
    if (err) return handleError(err)
  });
  next();
}

controller.deleteEntry = (req, res, next) => {
  Entries.deleteOne({"term": {$eq: 'term name'} }, (err) => {
    if (err) return handleError(err)
  });
};

controller.updpateEntry = (req, res, next) => {
  Entries.findOneAndUpdate({term: 'callback hell'}, {$set: {definition: 'new definition'}}, {new: true},
  (err, doc) => {
    if (err) {
      return handleError(err);
    }
  })
};




module.exports = controller
