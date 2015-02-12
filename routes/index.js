var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test6', function(req, res, next) {
  res.setHeader("host": "anything.com");
  res.render('index', { title: 'Hi' });
  console.log(res.headers)
});

module.exports = router;
