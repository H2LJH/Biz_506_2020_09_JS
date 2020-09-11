var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '대한민국' });
});

router.get("/home", function(req, res)
{
  res.send("Republic of Korea");
})

module.exports = router;
