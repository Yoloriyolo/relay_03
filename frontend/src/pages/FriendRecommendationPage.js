import React, { useState, useCallback, useEffect }  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useContextState } from '../Context';
import {getFriendRecommendation} from "../utils/API"
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
}));
const UserProfile = React.memo(({userInfo}) => {
    const classes = useStyles();
    
    return (
        <div className = {classes.root}>
            <Paper elevation={3} >
                {userInfo}
            </Paper>
        </div>
    )
})
const FriendRecommendationPage = () => {
    const classes = useStyles();
    const medalName = "/medal1.png"
    // /style="padding-left:20; padding-right:20;"
    //marginRight: '10em', marginLeft: '10em', backgroundColor: "black"
    const [userList, setUserList] = useState(null);
    useEffect(()=> {
        getFriendRecommendation('id123').then(res => {
            setUserList(res)
        })
    },[])
    return (
        <div>
            <div style={{height: 400, marginLeft: '10em', marginRight: '10em', display: "inline-flex"}} >     
                <img src="https://user-images.githubusercontent.com/48546343/90865747-d5069280-e3cd-11ea-8d27-e5c90b4b1814.png" 
                alt="Medal" width="360" height="400"/> 
                <img src="https://user-images.githubusercontent.com/48546343/90865752-d6d05600-e3cd-11ea-9eaf-a947d4ef837b.png" 
                alt="Medal" width="360" height="400"/>  
                <img src="https://user-images.githubusercontent.com/48546343/90865754-d8018300-e3cd-11ea-9470-156792049194.png" 
                alt="Medal" width="360" height="400"/>
            </div>    
            <div style={{height: 400, marginLeft: '10em', marginRight: '10em', display: "inline-flex"}} >
                {userList ? userList.map((user, i) => <UserProfile userInfo = {user} key = { i }/>): ''}
            </div>
            
            
        </div>
    )
}

export default FriendRecommendationPage
