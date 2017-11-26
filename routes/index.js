var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/emotions', function(req, res, next) {
  res.render('emotions', {});
});
router.get('/trial', function(req, res, next) {
  res.render('trial', {});
});

module.exports = router;
