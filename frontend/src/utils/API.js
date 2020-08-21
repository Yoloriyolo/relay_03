import axios from 'axios';

const baseURL = '/api';

const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  withCredentials: true,
});

export const getData = (restUrl = '') => {
    return instance.get(restUrl);
  };
  
export const postData = (restUrl = '', data = {}) => {
    return instance.post(restUrl, data);
};

// http://localhost:3000/api/auth
// {
//     "id":"myid",
//     "password":"mypassword"
// }

// {
//     "message": "로그인 성공!",
//     "info": {
//         "id": "myid",
//         "password": "mypassword",
//         "nickname": "mynick",
//         "hobby": {
//             "coding": false,
//             "training": true,
//             "music": false,
//             "history": true,
//             "restaurant": false,
//             "drink": false
//         }
//     }
// }

const handleLogin = async (input) => {
    const Url = 'auth/';
    // if(!input.id || !input.pw) {
    //     alert('모든 내용을 입력하세요.');
    //     return;
    // }

    try {
        const response = await postData(Url, input);     
        return response.data.info;
    } catch (err) {
        alert("로그인에 실패하셨습니다.");
    } 
}

const getPostById = async (post_id) => {
// http://localhost:3000/board/show/1
    const postDummy = {
        "post_id": "1",
        "title": "테스트",
        "author": "ddd",
        "date": "2020-08-14T09:43:33.990Z",
        "body": "되면 대박111118월14일입니다.",
        "comments": []
    }
    const Url = 'board/show/' + post_id.toString();
    const { data } = await getData(Url);

    console.log('result' + data);
    return data;
}


const postsDummy = {
    "board_id": 1,
    "counter": 2,
    "posts": [
        {
            "post_id": "0",
            "title": "테스트",
            "author": "ddd",
            "date": "2020-08-14T09:42:52.273Z",
            "body": "되면 대박",
            "comments": []
        },
        {
            "post_id": "1",
            "title": "테스트",
            "author": "ddd",
            "date": "2020-08-14T09:43:33.990Z",
            "body": "되면 대박",
            "comments": []
        },
        {
            "post_id": "2",
            "title": "테스트",
            "author": "ddd",
            "date": "2020-08-14T09:44:13.009Z",
            "body": "되면 대박",
            "comments": []
        }
    ]
}

const getPosts = async () => {
    const url = 'board/show';
    const { data } = await getData(url);
    // const data = postsDummy;    
    const posts = data.posts;
    return posts;
}


// const handleJoin = (data) => {
//         postData(`server url`, data).then((res)=>{
//             // 로그인 페이지로 이동.
//         })
// }

const handlePosting = async (data) => {
    const result = await postData("board/", data);
    return result
}

const registerUser = async (data) => {
    const response = await postData("register/", data)
    if (response.status === 201) window.location.href = "/login"
}

const getFriendRecommendation = async (userId) => {
    const postDummy = [
        {
            "id": "123456",
            "password": "123456",
            "nickname": "1234",
            "hobby": {
                "coding": true,
                "traning": true,
                "music": false,
                "history": false,
                "restaurant": true,
                "drink": false
            }
        },
        {
            "id": "asdf",
            "password": "123456",
            "nickname": "asdf",
            "hobby": {
                "coding": true,
                "traning": true,
                "music": false,
                "history": false,
                "restaurant": true,
                "drink": false
            }
        },
        {
            "id": "qwer",
            "password": "123456",
            "nickname": "qwer",
            "hobby": {
                "coding": true,
                "traning": true,
                "music": false,
                "history": false,
                "restaurant": true,
                "drink": false
            }
        }
    ]
    return postDummy
    // const Url = `/api/friends/{userid}`
    
    // const { data } = await getData(Url);

    // console.log('result' + data);
    // return data;
}
export {
    handleLogin,
    // handleJoin,
    getPostById,
    registerUser,
    getPosts,
    handlePosting,
    getFriendRecommendation
}
