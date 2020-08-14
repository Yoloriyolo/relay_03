var express = require('express');
var router = express.Router();
const fs = require('fs')

const jsonPath = './database/users.json';

// 회원 가입
router.post('/', (req, res, next) => {

    const { id, password, nickname, hobby } = req.body;

    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) res.status(500).json({ 'message': 'db access error' });

        const userDB = JSON.parse(data);


        // Check if user ID is already exist
        if (userDB.hasOwnProperty(id)) {
            res.status(502).json({ 'message': 'user id already exist' });
            return
        } 

        const newUser = {
            id: id,
            password: password,
            nickname: nickname,
            hobby: hobby
        }

        userDB[id] = newUser

        const json = JSON.stringify(userDB, null, 4);

        fs.writeFile(jsonPath, json, 'utf8', (err, file) => {
            if (err) {
                console.error('post json 파일 write 오류');
                res.status(500).json({ 'message': 'internal server error' });
                return;
            }


            res.status(201).json({ 'message': '유저 등록 성공!' });
        })
    });
});


module.exports = router;