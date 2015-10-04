var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a list of MAPS resources');
});

router.get('/:id', function(req, res, next) {
  res.send('respond with a MAPS resource');
});

router.post('/:id', function(req, res, next) {
  res.send('Posted a maps resource');
});



module.exports = router;
