var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test6', function(req, res, next) {
  //res.render('index', { title: 'Hi' });
  res.statusCode = 201;
  console.log(res)
});

module.exports = router;
