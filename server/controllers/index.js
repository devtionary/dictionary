'use strict';

const keys = require('../config/keys');
const pg = require('pg');

var db = new pg.Client(keys.db_url);
db.connect();

module.exports = db;
