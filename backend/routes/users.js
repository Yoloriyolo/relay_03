var express = require('express');
var router = express.Router();
const fs = require('fs')

const jsonPath = './database/users.json';

// 전체 유저 정보
router.get('/', function (req, res, next) {
  fs.readFile(jsonPath, (err, data) => {
    if (err) {
      console.log(err)
      res.status(400).json({ 'message': 'bad request' });
    }
    else res.json(JSON.parse(data));
  })
});


// 특정 유저 정보
router.get('/:id', function (req, res, next) {
  fs.readFile(jsonPath, (err, data) => {
    if (err) {
      res.status(400).json({ 'message': 'bar reques' });
    }


    else res.json(JSON.parse(data)[req.params.id]);
  })

  // res.send("user. id: " + req.params.id)
});


module.exports = router;
