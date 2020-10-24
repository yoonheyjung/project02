console.log("member.js 들어옴");

var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var dbconfig   = require('../config/database.js');
var connection = mysql.createConnection(dbconfig);

/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM tbl_member', function (err, rows) {
        if (err) throw err;
        res.send(rows);
        console.log(rows);
        return;
    });
});

//회원가입 시작
router.post('/signUp', function(req, res){
    console.log("signUp 들어옴");
    /* 변수 선언 */
    var user = {
      "name": req.body.form.name,
      "id": req.body.form.id,
      "pwd": req.body.form.pwd,
      "email": req.body.form.email,
      "gender": req.body.form.selected,
      "birth": req.body.form.birth,
      "weight": req.body.form.weight,
      "height": req.body.form.height
    } //양식을 임시 저장할 객체
  
    connection.query('SELECT id FROM tbl_member WHERE id = "' + user.id + '"', function (err, row) {
      if (row[0] == undefined){ //  동일한 아이디가 없을경우,
        //const salt = bcrypt.genSaltSync();
        //const encryptedPassword = bcrypt.hashSync(user.password, salt);
        connection.query('INSERT INTO tbl_member (id,pwd,name,gender,birth,email,weight,height) VALUES ("' + user.id + '","' + user.pwd + '","' + user.name + '","' + user.gender + '","' + user.birth + '","' + user.email + '","' + user.weight + '","' + user.height + '")', user, function (err, row2) {
          if (err) throw err;
        });
        res.json({
          success: true,
          message: 'Sing Up Success!'
        })
      }
      else {
        res.json({
          success: false,
          message: 'Sign Up Failed Please use anoter ID'
        })
      }
    });
});

module.exports = router;