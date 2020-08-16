const express = require('express');
const fs = require('fs')

const router = express.Router();

const jsonPath = './database/posts.json';


// 전체 게시글 조회
router.get('/show', (req, res, next) => {
    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).json({ 'message': 'db access error' });
        }

        else res.status(200).json(JSON.parse(data));
    });
});


// 특정 게시글 조회
router.get('/show/:id', (req, res, next) => {
    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).json({ 'message': 'db access error' });
        }
        res.status(200).json(JSON.parse(data).posts.find((post) => post.post_id === req.params.id));
    })
});


// 새로운 게시글 등록
router.post('/', (req, res, next) => {
    const { title, content, author } = req.body;

    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) res.status(500).json({ 'message': 'db access error' });

        const postDB = JSON.parse(data);
        postDB.counter += 1;

        const newPost = {
            "post_id": String(postDB.counter),
            "title": title,
            "author": author,
            "date": new Date(),
            "body": content,
            "comments": []
        }

        postDB.posts.push(newPost);
        const json = JSON.stringify(postDB, null, 4);

        fs.writeFile(jsonPath, json, 'utf8', (err, file) => {
            if (err) {
                console.error('post json 파일 write 오류');
                res.status(500).json({ 'message': 'internal server error' });
            }


            res.status(201).json({ 'message': '게시글 등록 성공!' });
        });
    });
});


// 특정 게시글 삭제
router.delete('/detail/:id', (req, res, next) => {
    const deleteId = req.params.id;

    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) res.status(500).json({ 'message': 'db access error' });

        const postDB = JSON.parse(data);

        // Check if post exist
        const postIndex = postDB.posts.findIndex(post => post.post_id === deleteId)
        if (postIndex === -1) {
            res.status(502).json({ 'message': 'Post index not found' });
            return
        }


        postDB.posts.splice(postIndex, 1);
        const json = JSON.stringify(postDB, null, 4);

        fs.writeFile(jsonPath, json, 'utf8', (err, file) => {
            if (err) {
                console.error('post json 파일 write 오류');
                res.status(501).json({ 'message': 'internal server error' });
            }

            res.status(201).json({ 'message': '게시글 삭제 성공!' });
        })
    });
});


module.exports = router;

































































































