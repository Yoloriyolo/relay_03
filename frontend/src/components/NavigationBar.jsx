import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    flexGrow: 1,
  },
  empty: {
    flexGrow: 10,
  }
}));


export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            부캠 나우
          </Typography>
          <Button color="inherit" className={classes.menu} href="/">자유게시판</Button>
          {/* <Button color="inherit" className={classes.menu}>동물</Button>
          <Button color="inherit" className={classes.menu}>인물</Button>
          <Button color="inherit" className={classes.menu}>운동</Button> */}
          <div className={classes.empty}></div>
          <Button color="inherit" href="/FriendRecommend">친구 추천</Button>
          <Button color="inherit" href="https://csy1204.github.io/animal-face/" target="_blank">동물상 찾기</Button>
          <Button color="inherit" href="/writing_post">글쓰기</Button>
          <Button color="inherit" href="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
