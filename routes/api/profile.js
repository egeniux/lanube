const express = require('express');

const router = express.Router();


// @route GET api/profile
// @desc Profile route
// @access Public

router.get('/test', (req, res) => res.json({
  msg: 'Profile Works'
}));

module.exports = router;