import axios from 'axios';

const baseURL = 'https://localhost:3000/';

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

const handleLogin = (data) => {
    const endpoint = ''
    //if(!id || !pw) alert('모든 내용을 입력하세요.');
    alert(data.id, data.pw);

    // const result = await postData(url, {id, pw})

    postData(baseURL + endpoint, data)
    .then(res => {
        //
    })
    .catch(error => {
        console.log(error);
    })
}

const handleJoin = (data) => {
        postData(`server url`, data).then((res)=>{
            // 로그인 페이지로 이동.
        })
    
}

export {
    handleLogin,
    handleJoin
}

