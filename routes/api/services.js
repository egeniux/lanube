const express = require('express');

const router = express.Router();

// @route GET api/users
// @desc Services route
// @access Public

router.get('/test', (req, res) => res.json({
  msg: 'Services Works'
}));

module.exports = router;