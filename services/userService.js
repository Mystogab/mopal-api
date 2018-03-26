const User = require('../models/user');

const service = {};

service.findUserByUserName = (user) => {
  return User.findOne({ user: user });
};





module.exports = service;
