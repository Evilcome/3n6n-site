var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '3N6N - Coming Soon!' });
});

module.exports = router;
