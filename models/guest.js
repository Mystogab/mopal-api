const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true, index: true},
  surname: {type: String, required: true, index: true},
  age: {type: Number, required: true},
  phone: {type: Number, required: true},
  easters: {type: Number, required: true},
  contribution: {type: Boolean, required: true},
  dayOne: {type: Boolean, default: true},
  dayTwo: {type: Boolean, default: false},
  dayThree: {type: Boolean, default: false},
  tutor: {type: String, required: false},
  guestBy: {type: String, required: true},
  walkIn: {type: String, required: true},
  easterKind: {type: String, required: true},
  sex: {type: String, required: true},
  local: {type: String, required: true},
  marital: {type: String, required: true},
  childs: {type: Number, required: true},
  subscribedBy: {type: String, required: true}
});

const Guest = mongoose.model('Guest', userSchema);
module.exports = Guest;
