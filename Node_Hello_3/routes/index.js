var express = require('express');
const moment = require('moment');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  let date = moment().format("YYYY-MM-DD-HH:mm:ss");
  let title = '반갑습니다.'
  res.render('index', { title, date } );
});

module.exports = router;
