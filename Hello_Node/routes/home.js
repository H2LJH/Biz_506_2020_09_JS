const express = require('express');
const router = express.Router();

module.exports = router;


router.get('/', function(req, res)
{
    res.render('div');
})

router.post('/', function(req, res)
{
    res.send("Home POST Mapping");
})