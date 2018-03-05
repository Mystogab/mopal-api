const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use(cors());


//Define routes
app.use('/', routes);

module.exports = app;
