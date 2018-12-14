const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/dictionary';

// Database Name
const dbName = 'dictionary';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('users');
//   // Insert some documents
//   collection.insertOne([
//     { userName : 'batman',
//       password: 'robin',
//       entries: 'a, b, c',
//       badEntries: 1}
//   ], function(err, result) {
//     callback(result);
//   });
// }
