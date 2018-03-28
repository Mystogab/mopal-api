const users = require('./usersRoutes');
const local = require('./localRoutes');

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

//The Routes
router.use('/user', users);
router.use('/local', local);

module.exports = router;
