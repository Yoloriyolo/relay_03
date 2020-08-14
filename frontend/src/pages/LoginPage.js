import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 

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
  const [pw, setPW] = useState("");

  // 로그인
  const handleSubmit = () => {
        const Url = "";
        const data = {id, pw};
        console.log(id, pw);

        axios.post(Url, data)
        .then(res => {
            //
        })
        .catch(error => {
            console.log(error);
        })
    }

  return (
    <form style={styles.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <div>
            <div>
                <label>ID</label>
                <TextField style={styles.input} id="idInput" label="ID" onChange={(e) => setID(e.target.value)}/>
            </div>
            <div>
                <label>PW</label>
                <TextField style={styles.input} id = "pwInput" label="PW" onChange={(e) => setPW(e.target.value)}/>
            </div>
          </div>
            <Button type="submit" value="Submit">Login</Button>
        </div>
        <div>
            <Link to='/join'>
                <Button type="" value="">회원가입</Button>
            </Link>
            <Button type="" value="">로그아웃</Button>
        </div>
    </form>
  );
}

const styles = {
    container : {
        textAlign: 'center'
    },

    form : {
        padding: '10px 0',
        textAlign: 'center',
        position: 'fixed',
        bottom: '0px',
        height: '10%', 
        width: '100%'
    },

    input: {
        marginLeft:'10px',
        width: '300px',
        padding: '.3em', /* 여백으로 높이설정 */
    },
}