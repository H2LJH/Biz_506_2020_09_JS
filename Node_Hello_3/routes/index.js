const express = require('express');
const moment = require('moment');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{  
  let date = moment().format("YYYY-MM-DD");
  let time = moment().format('HH:mm:ss');
  let title = '반갑습니다.'
  res.render('index', { title, date, time } );
});

router.post('/', function(req, res)
{
  let date = moment().format("YYYY-MM-DD");
  let time = moment().format('HH:mm:ss');
  let title = req.body.name + "님 반갑습니다.";
  res.render('index', {title, date, time})
})

module.exports = router;
