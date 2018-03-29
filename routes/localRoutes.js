const { authCheck } = require('../utils/security');
const cds = require('../services/commonDataService');

const express = require('express');
const router = express.Router();

router.get('/:thelocal', async (req, res) => {
  const {thelocal} = req.params;
  res.json(cds['fetch' + thelocal]());
});



module.exports = router;
