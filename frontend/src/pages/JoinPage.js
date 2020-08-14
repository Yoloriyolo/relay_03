import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {isId, isPassword} from '../utils/validator';
import StyledTextFiled from '../components/StyledTextFiled';
import StyledButton from '../components/Button';


// MUI 사용


const initialState = {
    id: {
        value : '',
        vaild : true,       
    },
    password: {
        value: '',
        vaild: true,
    },
    pwCheck: {
        value: '',
        vaild: true,  
    },
}


export default function JoinPage(){
    const [inputs, setInputs] = useState(initialState);
    const history = useHistory();
    const {id, password, pwCheck} = inputs


    const onChange = (e) => {
        const {name, value} = e.target;
        const newInputs = {...inputs};

        switch(name){
            case 'id':
                newInputs.id = {value, valid: isId(value)};
                break;
            case 'password':
                newInputs.password = {value, valid: isPassword(value)};
                break;
            case 'pwCheck':
                newInputs.pwCheck = {value, valid: password.value === value};
                break;
            default:
                break;
        }
        setInputs(newInputs);
    }

    // 회원가입 눌렀을때..
    const onSubmit = () => {
        // TODO: API 연결
        if(
            !isId(id.value) ||
            !isPassword(password.value) ||
            !isPassword(pwCheck.value)
        ){
            return alert('입력 정보 확인!!!');
        }

        // 서버에 보낼 데이터!
        const data = {id: id.value, pw: password.value};
        console.log(data);
    }


    return (
        <>
        {/* TODO: MATEIALUI */}
            <StyledTextFiled 
                label="id"
                type='text' 
                name='id' 
                value={id.value} 
                onChange={onChange}
                error={!id.value}
                helperText={!id.vaild ? '유효한 아이디 아닙니다.(4~15영문숫자)' : ''}
            /><br/>
            <StyledTextFiled 
                type='password' 
                name='password' 
                value={password.value}  
                onChange={onChange}/>
                error={!id.value}
                helperText={!id.vaild ? '유효한 아이디 아닙니다.(4~15영문숫자)' : ''}
            <br/>
            <StyledTextFiled 
                type='password' 
                name='pwCheck' 
                value={pwCheck.value}  
                onChange={onChange}/><br/>
        {/* ...? */}
            <StyledButton 
                type="submit"
                onClick={onSubmit}
                >
                    회원 가입하기
            </StyledButton>
        </>
    );


}