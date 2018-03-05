const { authCheck } = require('../utils/security');

const express = require('express');
const router = express.Router();

//Login user (return a token)
router.post('/login', (req, res) => {
  data = { user: req.body.user, pass: req.body.pass };
  if (data.user === 'admin' && data.pass === '1234') {
    res.json({token: 'VALID'});
  }
  else {
    res.status(401).json({msg: 'Invalid User'});
  }
});

//get current user info
router.get('/info', authCheck, (req, res) => {
  res.json({ name:  'Administrator', permisions: ['admin']});
});

module.exports = router;
