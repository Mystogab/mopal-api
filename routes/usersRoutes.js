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

//search guest (it doesnt go here!!)
router.post('/search', authCheck, (req, res) => {
  res.json([{id: '001', name: 'Gabriel', surname: 'Desimone', age: 26, local: 'Malvinas'},
{id: '002', name: 'Cintia', surname: 'Godoy', age: 26, local: 'JCP'}]);
});

//get a Guest Info
router.get('/info/:guestId', authCheck, (req, res) => {
  const {guestId} = req.params;
  if (guestId === "001") {
    res.json({id: guestId, name: 'Gabriel', surname: 'Desimone', dayOne: true, dayTwo: false, dayThree: false, contribution: true});
  }
  else {
    res.status(403);
    res.json({msg: 'Error'});
  }
});

//subscribe a guest
router.post('/guest', authCheck, (req, res) => {
  const body = req.body;
  console.log(JSON.stringify(body));
  res.status(200).json({msg: 'invitado guardado'});
});

//update a guest
router.put('/guest', authCheck, (req, res) => {
  const body = req.body;
  console.log(JSON.stringify(body));
  res.status(200).json({msg: 'invitado actualizado'});
});

module.exports = router;
