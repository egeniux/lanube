const express = require('express');

const router = express.Router();

// @route GET api/marketplace
// @desc Marketplace route
// @access Public

router.get('/test', (req, res) => res.json({
  msg: 'Marketplace Works'
}));

module.exports = router;