import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {isId, isPassword} from '../utils/validator';
import StyledTextFiled from '../components/StyledTextFiled';
import StyledButton from '../components/Button';



const Container = styled.div`
    text-align: center;
    margin-top 50px;
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
    interest: {
        value: '',
        vaild: false,
    }
}


export default function JoinPage(){
    const [inputs, setInputs] = useState(initialState);
    const history = useHistory();
    const {id, password, pwCheck, nick, interest} = inputs


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
            case 'interest':
                newInputs.interest = {value, valid: true};
                break;
            default:
                break;
        }
        console.log(newInputs);
        setInputs(newInputs);
    }

    // 회원가입 눌렀을때..
    const onSubmit = () => {
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
                      pw: password.value,
                      nick: nick.value,
                      interest: interest,
                    };
        
    }


    return (
      
        <Container>
            <StyledTextFiled 
                label="아이디(4~15 영문숫자)"
                type='text' 
                name='id' 
                value={id.value} 
                onChange={onChange}
                //error={id.vaild}
                //helperText={id.vaild ? '유효한 아이디 아닙니다.(4~15영문숫자)' : ''}
            />
            <br/>
            <StyledTextFiled 
                label="비밀번호(6~15 영문숫자)"
                type='password' 
                name='password' 
                value={password.value}  
                onChange={onChange}
                //error={password.vaild}
                //helperText={password.vaild ? '6~15자 이내 비밀번호를 입력하세요.' : ''}
                />                
            <br/>
            <StyledTextFiled 
                label="비밀번호확인"
                type='password' 
                name='pwCheck' 
                value={pwCheck.value}  
                onChange={onChange}
                //error={pwCheck.vaild}
                //helperText={password.vaild ? '비밀 번호가 일치하지 않습니다.' : ''}
                />
            <br/>
            <StyledTextFiled 
                label="닉네임(3 글자 이상)"
                type='text' 
                name='nick' 
                value={nick.value}  
                onChange={onChange}
                //error={nick.vaild}
                //helperText={nick.vaild ? '3글자 이상으로 입력해주세요.' : ''}
                />
            <br/>
            <StyledTextFiled 
                label="관심사"
                type='text' 
                name='interest' 
                value={interest.value}  
                onChange={onChange}
                //error={interest.vaild}
                //helperText={interest.vaild ? '흥미를 입력해주세요.' : ''}
                />
            <br/>
            <StyledButton 
                type="submit"
                onClick={onSubmit}
                >
                회원 가입하기
            </StyledButton>
         </Container>
        
    );


}