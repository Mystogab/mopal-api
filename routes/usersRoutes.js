const { authCheck } = require('../utils/security');

const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const guestService = require('../services/guestService');
const jwt = require('jsonwebtoken');

//Login user (return a token)
router.post('/login', async (req, res) => {
  const data = {user: req.body.user, pass: req.body.pass};
  try {
    const user = await userService.findUserByUserName(data.user);
    if (!user) {
      res.status(400).json({msg: 'user not found'});
    } else {
      if (user.pass === data.pass) {
        //console.log(user.id);
        const payload = { id: user.id, name: user.name };
        const token = jwt.sign(payload, 'shhh');
        res.json({token: token});
      } else {
        res.status(400).json({msg: 'bad password'});
      }
    }
  } catch(err) {
    res.status(503).json(err);
  }
});

//get current user info
router.get('/info', authCheck, (req, res) => {
  res.json({ name:  req.user.name});
});

//search guest (it doesnt go here!!)
router.post('/search', authCheck, async (req, res) => {
  const value = req.body.search;
  try {
    const result = await guestService.findByFTS(value);
    res.json(result);
  } catch (e) {
    res.status(503).json(e);
  }
});

//get a Guest Info
router.get('/info/:guestId', authCheck, async (req, res) => {
  const {guestId} = req.params;
  try {
    const guest = await guestService.findById(guestId);
    res.json(guest);
  } catch (e) {
    res.status(503).json(e);
  }
});

//subscribe a guest
router.post('/guest', authCheck, async (req, res) => {
  const guest = req.body;
  guest.subscribedBy = req.user.name;
  console.log(JSON.stringify(guest));

  //real work:
  try {
    const savedGuest = await guestService.saveGuest(guest);
    res.json({msg: 'Invitado Guardado Correctamente', savedGuest});
  } catch (e) {
    res.status(503).json(e);
  }
});

//update a guest
router.put('/guest', authCheck, async (req, res) => {
  const updatedGuest = req.body;
  console.log(JSON.stringify(updatedGuest));

  try {
    const effUpdatedGuest = await guestService.update(updatedGuest);
    res.json({msg: 'Invitado Actualizado Correctamente' ,effUpdatedGuest});
  } catch (e) {
    res.status(503).json(e);
  }
});

module.exports = router;
