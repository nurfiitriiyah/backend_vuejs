var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    console.log("===============POST LOGIN=========================")
    console.log(req.body)
    res.json("hello")
});

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});

});

module.exports = router;
