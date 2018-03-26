const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: {type: String, required: true, index: true},
  pass: {type: String, required: true},
  name: {type: String, required: true}
});

const User = mongoose.model('User', userSchema);
module.exports = User;
