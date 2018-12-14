const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EntriesSchema = new Schema ({
  term: String,
  definition: String,
  upVotes: Number,
  downVotes: Number,
  createdBy: String,
  tags: [String]
})

let Entries = mongoose.model('entries', EntriesSchema);
