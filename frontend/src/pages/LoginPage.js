import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import './LoginPage.css';
import { handleLogin } from '../utils/API.js'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function LoginPage(props) {
  const classes = useStyles();
  const [id, setID] = useState("");
  const [password, setPW] = useState("");

  const onSubmit = () => {
    handleLogin({id, password});
    setID("");
    setPW("");
  }

  return (
    <form className="container" noValidate autoComplete="off" onSubmit={(e)=>{ onSubmit(); e.preventDefault() }}>
        <div className="login_form">
          <div>
            <div className="input-group">
                <label>ID</label>
                <TextField style={styles.input} id="idInput" label="id" value={id} onChange={(e) => setID(e.target.value)}/>
            </div>
            <div className="input-group">
                <label>PW</label>
                <TextField style={styles.input} id = "pwInput" label="pw" value={password} type="password" onChange={(e) => setPW(e.target.value)}/>
            </div>
          </div>
            <Button className="login-btn" variant="outlined" type="submit" value="Submit">Login</Button>
        </div>
        <div className="btn_form">
            <Link to='/join'>
                <Button className="btn" type="" value="">회원가입</Button>
            </Link>
        </div>
    </form>
  );
}

const styles = {
    input: {
        marginLeft:'10px',
        width: '300px',
        padding: '.3em', /* 여백으로 높이설정 */
    },
}
