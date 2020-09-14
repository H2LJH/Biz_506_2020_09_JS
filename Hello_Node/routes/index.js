var express = require('express');
const { param } = require('./users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '대한민국' });
});

router.get('/home/index', function(req, res)
{
  res.send('우리나라 만세');
})

router.get('/add', function(req, res)
{
  /* 
  req.query
  ?변수=값 형태로 전달된 값을 추출하기
  client 에서 num2라는 query변수에 값이 담겨오면
  그 값을 정수로 바꾸어서 num2에 저장하고
  그렇지 않으면 num2에 정수 40을 저장하라
  */
  let num1 = req.query.num1 || 30;
  let num2 = req.query.num2 || 40;
  let sum = num1 + num2;
  res.send(sum + '');
})

// 주소값에 : 문자열 = client에서 수신하는 변수
router.get('/add/:num1/:num2', function(req, res)
{
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);
  let sum = num1 + num2;
  res.send(sum + '');
})

router.post('/input', function(req, res)
{
  
  let m_user = req.body.m_user;
  console.log(m_user);
  res.send('전송된 user : ' + m_user);
})
module.exports = router;
