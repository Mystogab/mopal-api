const expressjwt = require('express-jwt');

const authCheck = expressjwt({
  secret: new Buffer('shhh'),
  getToken: function(req) {
    if (req.headers && req.headers['token']) {
      return req.headers['token'];
    }
    return null;
  }
});

module.exports = { authCheck };
