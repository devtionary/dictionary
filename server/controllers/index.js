'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const pg = require('pg');

var conString = "postgres://nefvhamn:P9a1rWUEDQxd3v-yoi_OYLzKuBjRax3Z@pellefant.db.elephantsql.com:5432/nefvhamn" //Can be found in the Details page
var db = new pg.Client(conString);
db.connect();

module.exports = db;
