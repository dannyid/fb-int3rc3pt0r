var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test5', function(req, res, next) {
  res.render('index', { title: 'Hi' });
  console.log(res.headers)
});

module.exports = router;
