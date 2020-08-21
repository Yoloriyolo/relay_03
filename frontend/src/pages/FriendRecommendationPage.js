import React, { useState, useCallback, useEffect }  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useContextState } from '../Context';

import {getFriendRecommendation} from "../utils/API"
import image from './medal1.png'
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
const UserProfile = React.memo(() => {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <Paper elevation={3} >
                Nickname
                Hoby
            </Paper>
        </div>
    )
})
const FriendRecommendationPage = () => {
    const classes = useStyles();
    const {userId} = useContextState();
    const medalName = "/medal1.png"
    console.log(userId)
    // /style="padding-left:20; padding-right:20;"
    return (
        <div>
            
            <div>    
                <img src="https://user-images.githubusercontent.com/48546343/90865747-d5069280-e3cd-11ea-8d27-e5c90b4b1814.png" 
                alt="Medal" width="420" height="480"/> 
                <img src="https://user-images.githubusercontent.com/48546343/90865752-d6d05600-e3cd-11ea-9eaf-a947d4ef837b.png" 
                alt="Medal" width="420" height="480"/>  
                <img src="https://user-images.githubusercontent.com/48546343/90865754-d8018300-e3cd-11ea-9470-156792049194.png" 
                alt="Medal" width="420" height="480"/>
            </div>
            <UserProfile/>
            <div onClick = {getFriendRecommendation(userId)}>
                test222
            </div>
        </div>
    )
}

export default FriendRecommendationPage
