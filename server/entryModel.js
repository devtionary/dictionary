const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entriesSchema = new Schema({
  term: { type: String, required: true },
  definition: String,
  upvotes: Number,
  downvotes: Number,
  createdBy: String,
  tags: [String]
})

const Entries = mongoose.model('Entries', entriesSchema);
module.exports = Entries;
