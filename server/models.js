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
  username: String,
  password: String,
  entries: String,
  badEntries: Number
})

const Users = mongoose.model('Users', userSchema);
const Entries = mongoose.model('Entries', entriesSchema);
let newUser = {
  username: "Eugene",
  password: "kittens88",
  entries: "yada, yada, yoo",
  badEntries: 44
}
let newEntry = {
  term: "hi",
  definition: "hi",
  upVotes: 10,
  downVotes: 1,
  createdBy: "hi",
  tags: ["hi"]
}

let entryDoc = new Entries(newEntry);
let userDoc = new Users(newUser);
entryDoc.save((err) => {
  if (err) return handleError(err)

})
userDoc.save((err) => {
  if (err) return handleError(err);
});



module.exports = Users, Entries;
