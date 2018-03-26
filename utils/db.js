const mongoose = require('mongoose');
const mongodbUrl = 'mongodb://localhost/mopal';

//connect to mongo with new connection logic
mongoose.connect(mongodbUrl);

//enable promises
mongoose.Promise = require('bluebird');

module.exports = mongoose.connection;
