var express = require('express');
var router = express.Router();

/* Dummy index route. */
router.get('/', function(req, res, next) {
  res.send('This route is in no use.');
});

module.exports = router;
