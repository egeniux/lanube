const express = require('express');

const router = express.Router();

// @route GET api/users
// @desc Users route
// @access Public

router.get('/test', (req, res) => res.json({
  msg: 'Users Works'
}));

module.exports = router;