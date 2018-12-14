const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/dictionary');

const entriesSchema = new Schema ({
  term: String,
  definition: String,
  upVotes: Number,
  downVotes: Number,
  createdBy: String,
  tags: [String]
})

const Entries = mongoose.model('entries', entriesSchema);

module.exports = (Entries);
