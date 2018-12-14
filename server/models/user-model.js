const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/mongodb-orm');

const userSchema = new Schema ({
  userName: String,
  password: String,
  entries: String,
  badEntries: Number
})

const Users = mongoose.model('users', userSchema);

module.exports = Users
