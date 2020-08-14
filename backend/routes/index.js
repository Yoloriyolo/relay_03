const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../", "frontend/build"));
});

// /* get loing page. */
// router.get('/login', function (req, res) {
//   res.render('login', { page: "login" });
// });

// /* get signup page.*/
// router.get('/signup', function (req, res) {
//   res.render('signup', { page: "signup" });
// });


module.exports = router;

// {
//   "board_id": 1,
//   "posts": [
//     {
//       "post_id": "123",
//       "title": "Boostcamp에 오신 것을 환영합니다",
//       "author": "김계란",
//       "date": "2020-08-27 12:15:32",
//       "body": "내용이 없어요..",
//       "comments": [
//         {
//           "commentId": 1,
//           "body": "hello"
//         },
//         {
//           "commentId": 2,
//           "body": "hello world"
//         }
//       ]
//     },
//     {
//       "post_id": "123",
//       "title": "Boostcamp에 오신 것을 환영합니다",
//       "author": "김계란",
//       "date": "2020-08-27 12:15:32",
//       "body": "내용이 없어요..",
//       "comments": []
//     }
//   ]
// }
							                 





