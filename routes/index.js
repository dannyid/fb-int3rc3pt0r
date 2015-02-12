var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test6', function(req, res, next) {
  res.render('index', { title: 'Hi' });
  console.log(req)
});

module.exports = router;
