var express = require('express');
var router = express.Router();

/*
    NOT IMPLEMENTED
*/


router.get('/board/detail/:post_id/comment', (req, res) => {
    res.json({ 'code': 200, 'message': '댓글 조회' });
});

router.post('/board/detail/:post_id/comment', (req, res) => {
    res.json({ 'code': 200, 'message': '댓글 등록' });
});

module.exports = router;