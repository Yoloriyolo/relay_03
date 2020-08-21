import React, {useState} from 'react';
import styled from 'styled-components';
import {isId, isPassword} from '../utils/validator';
import StyledTextFiled from '../components/StyledTextFiled';
import StyledButton from '../components/StyledButton';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import {registerUser} from "../utils/API"

const Container = styled.div`
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top 50px;
`;

const Text = styled.div`
    color: #424242;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 20px;
`;


const initialState = {
    id: {
        value : '',
        vaild : false,       
    },
    password: {
        value: '',
        vaild: false,
    },
    pwCheck: {
        value: '',
        vaild: false,  
    },
    nick: {
        value: '',
        vaild: false,
    },
    hobby: {
        coding : 0,
        traning : 0,
        music : 0,
        history : 0,
        restaurant : 0,
        drink : 0,
    }
}    




export default function JoinPage(){
    
    
    const [inputs, setInputs] = useState(initialState);
    const {id, password, pwCheck, nick, hobby} = inputs
    
    
    const onChange = (e) => {
        const {name, value} = e.target;
        const newInputs = {...inputs};
        
        console.log(value)
        switch(name){
            case 'id':
                newInputs.id = {value, valid: isId(value)};
                break;
                case 'password':
                newInputs.password = {value, valid: isPassword(value)};
                newInputs.pwCheck.valid = value === pwCheck.value;
                break;
                case 'pwCheck':
                newInputs.pwCheck = {value, valid: password.value === value};
                break;
                case 'nick':
                newInputs.nick = {value, valid: value.length >= 4};
                break;
            case 'hobby.coding':
               
                
                newInputs.hobby = {...hobby, coding: value};
                
                break;
                case 'hobby.traning':   
                newInputs.hobby = {...hobby, traning: value};
                break;
                case 'hobby.music':
                newInputs.hobby = {...hobby, music: value};
                break;
                case 'hobby.history':
                newInputs.hobby = {...hobby, history: value};
                break;
            case 'hobby.restaurant':
                newInputs.hobby = {...hobby, restaurant: value};
                break;
                case 'hobby.drink':
                newInputs.hobby = {...hobby, drink: value};
                break;
            
            default:
                break;
        }
        setInputs(newInputs);
    }
    function sum(){
        let a = 0
        Object.keys(hobby).forEach(item=> a+=hobby[item]);
        return a;
    }
    /*
    function checkInputNumber(obj){
        let reg=/^[0-9]{1,100}$/g;
        if(reg.test(obj.value)){
            alert("숫자만 입력하세요");
        }
    }
    */
    // 회원가입 눌렀을때..
    const onSubmit = async () => {
        //checkInputNumber(obj);
        if(sum() != 100){
            return alert('값의 합은 100이 되어야합니다!')
        }
        
        // TODO: API 연결
        if(
            !isId(id.value) ||
            !isPassword(password.value) ||
            !isPassword(pwCheck.value) ||
            nick.value.length < 3
        ){
            return alert('입력 정보 확인!!!');
        }
        // 서버에 보낼 데이터!
        const data = {id: id.value, 
            password: password.value,
                      nickname: nick.value,
                      hobby,
                    };
                    await registerUser(data)
                }
                
                
    return (
      
        <Container>
            <StyledTextFiled 
                label="아이디(4~15 영문숫자 )"
                type='text' 
                name='id' 
                value={id.value} 
                onChange={onChange}
            />
            <StyledTextFiled 
                label="비밀번호(6~15 영문숫자)"
                type='password' 
                name='password' 
                value={password.value}  
                onChange={onChange}
                />                
            <StyledTextFiled 
                label="비밀번호확인"
                type='password' 
                name='pwCheck' 
                value={pwCheck.value}  
                onChange={onChange}
                />
            <StyledTextFiled 
                label="닉네임(3 글자 이상)"
                type='text' 
                name='nick' 
                value={nick.value}  
                onChange={onChange}
                />
            
            <Text>Selct hobbys</Text>   

            <StyledTextFiled
                label = "coding"
                type = 'text'
                name = 'hobby.coding'
                value = {hobby.coding}
                onChange={onChange}
                />
            <StyledTextFiled
                label = "music"
                type = 'text'
                name = 'hobby.music'
                value = {hobby.music}
                onChange={onChange}
                />
            <StyledTextFiled
                label = "traning"
                type = 'text'
                name = 'hobby.traning'
                value = {hobby.traning}
                onChange={onChange}
            />
            <StyledTextFiled
                label = "history"
                type = 'text'
                name = 'hobby.history'
                value = {hobby.history}
                onChange={onChange}
            />
            <StyledTextFiled
                label = "restaurant"
                type = 'text'
                name = 'hobby.restaurant'
                value = {hobby.restaurant}
                onChange={onChange}
            />
            <StyledTextFiled
                label = "drink"  
                type = 'text'
                name = 'hobby.drink'
                value = {hobby.drink}
                onChange={onChange}
            />
                
            <StyledButton 
                type="submit"
                onClick={onSubmit}
                >
                회원 가입하기
            </StyledButton>
         </Container>
        
    );


}

