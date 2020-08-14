const express = require('express');
const fs = require('fs')

const router = express.Router();


const jsonPath = './database/users.json';


// 로그인
router.post('/', (req, res, next) => {
    const { id, password } = req.body;

    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({ 'message': 'user DB access error' });
        }

        const userDB = JSON.parse(data);

        if (userDB.hasOwnProperty(id)) {
            const match = userDB[id].password === password;

            if (match) res.json({ 'message': '로그인 성공!', 'info': userDB[id] });
            else res.status(401).json({ 'message': '아이디 혹은 비밀번호를 확인해주세요' });
        } else {
            res.status(401).json({ 'message': '유효하지 않은 사용자입니다!' });
        }
    })
});


module.exports = router;