const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let IdiomSchema = new Schema ({
  term: String,
  definition: String,
  upVotes: Number,
  downVotes: Number,
  createdBy: String,
  tags: [String]
})

let Idioms = mongoose.model('users', UserSchema);
