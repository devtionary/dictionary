const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema ({
  userName: String,
  password: String,
  entries: String,
  badEntries: Number
})

let Users = mongoose.model('users', UserSchema);
