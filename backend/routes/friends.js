const express = require('express');
const fs = require('fs')

const router = express.Router();

const jsonPath = './database/friends.json';

// 전체 게시글 조회
router.get('/:id', (req, res, next) => {
    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).json({ 'message': 'db access error' });
        }

        else {
          const userid = req.params.id;
          const friendsJSON = JSON.parse(data);
          const friends = friendsJSON[userid].friends;
          res.status(200).json(friends);
        }
    });
});

module.exports = router;
