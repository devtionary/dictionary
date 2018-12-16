const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entriesSchema = new Schema({
  term: String,
  definition: String,
  upVotes: Number,
  downVotes: Number,
  createdBy: String,
  tags: [String]
})
const userSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  entries: Array,
  badEntries: Number
})

const Users = mongoose.model('Users', userSchema);
const Entries = mongoose.model('Entries', entriesSchema);

module.exports = Users, Entries;
