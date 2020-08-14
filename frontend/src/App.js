import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';

import Table from './pages/Table';
import Posting from './pages/Posting';
import Post from './pages/Post';
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import JoinPage from './pages/JoinPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/board/:postId" component={Post} />
          <Route path="/writing_post" component={Posting} />
          <Route path="/login" component={LoginPage} />
          <Route path="/join" component={JoinPage}/>
          <Route path="/profile" component={ProfilePage} />
          <Route exact path="/" component={Table} />         
        </Switch>
      </Router>
    );
  }
}

export default App;