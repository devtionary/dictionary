const Entries = require("../models/entryModel.js");
const path = require('path');

const entryController = {};


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

  module.exports = entryController;
  