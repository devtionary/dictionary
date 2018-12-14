const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');


const server = http.createServer(app)





app.listen(3000, () => console.log(`we live on port 3000`));
module.exports = app;