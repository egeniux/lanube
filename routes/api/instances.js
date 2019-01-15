const express = require('express');

const router = express.Router();


// @route GET api/profile
// @desc Instances route
// @access Public

router.get('/test', (req, res) => res.json({
  msg: 'Instances Works'
}));

module.exports = router;