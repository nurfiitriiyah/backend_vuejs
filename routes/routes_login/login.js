var express = require('express');
var router = express.Router();
var backend = require("../../backend/backend_login/login")
/* GET home page. */
router.post('/', function (req, res, next) {
  try{
      console.log("===============POST LOGIN=========================")
      var checkLogin = backend.login(req.body);
      console.log(checkLogin)
      res.json (checkLogin)
  }
  catch (e) {
      res.json ({
          status: "nok",
          message: e
      })
  }
});

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});

});

module.exports = router;
