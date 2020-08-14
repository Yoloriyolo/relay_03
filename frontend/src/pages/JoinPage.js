import React, {useState} from 'react';
import styled from 'styled-components';
import {isId, isPassword} from '../utils/validator';
import StyledTextFiled from '../components/StyledTextFiled';
import StyledButton from '../components/Button';
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
        coding : false,
        traning : false,
        music : false,
        history : false,
        restaurant : false,
        drink : false,
    }
}


export default function JoinPage(){

    const [inputs, setInputs] = useState(initialState);
    const {id, password, pwCheck, nick, hobby} = inputs


    const onChange = (e) => {
        const {name, value} = e.target;
        const newInputs = {...inputs};

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
            case 'hobby':
                newInputs.hobby = {...newInputs.hobby,  [value]: !newInputs.hobby[value]};
                break;
            default:
                break;
        }
        setInputs(newInputs);
    }

    // 회원가입 눌렀을때..
    const onSubmit = async () => {
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

            <FormGroup row> 
                <FormControlLabel control={<Checkbox name="hobby" value="coding" checked={hobby.coding} onClick={onChange}/>} label="coding" />
                <FormControlLabel control={<Checkbox name="hobby" value="traning" checked={hobby.traning} onClick={onChange} />} label="traning" />
                <FormControlLabel control={<Checkbox name="hobby" value="music" checked={hobby.music} onClick={onChange} />} label="music"/>
                <FormControlLabel control={<Checkbox name="hobby" value="history" checked={hobby.history} onClick={onChange}/>} label="history" />
                <FormControlLabel control={<Checkbox name="hobby" value="restaurant" checked={hobby.restaurant} onClick={onChange} />} label="restaurant" />
                <FormControlLabel control={<Checkbox name="hobby" value="drink" checked={hobby.drink} onClick={onChange} />} label="drink" />
            </FormGroup>
            
            <StyledButton 
                type="submit"
                onClick={onSubmit}
                >
                회원 가입하기
            </StyledButton>
         </Container>
        
    );


}

