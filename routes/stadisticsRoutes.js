const { authCheck } = require('../utils/security');
const sta = require('../services/stadisticsService');

const express = require('express');
const router = express.Router();

router.get('/', authCheck, async (req, res) => {
  const stats = await sta.getStadistics();
  res.json(stats);
});


module.exports = router;
