const pg = require('pg');
const keys = require('../config/keys');

const db = new pg.Client(keys.db_url);
db.connect();

module.exports = db;
