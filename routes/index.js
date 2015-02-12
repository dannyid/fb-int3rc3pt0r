var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hi' });
  console.log('User-Agent: ' + req.headers['user-agent'])
});

module.exports = router;
