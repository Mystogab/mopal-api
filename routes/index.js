const users = require('./usersRoutes');

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

//The Routes
router.use('/user', users);

module.exports = router;
