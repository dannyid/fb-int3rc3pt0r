var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test8', function(req, res, next) {
  //res.render('index', { title: 'Hi' });
  res.status(201);
  res.set("host", 'anything.com');
  res.headers.host = "whatever.com";
  res.send();
  console.log(res)
});

module.exports = router;
