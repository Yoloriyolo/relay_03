import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';

import Table from './pages/Table';
import Posting from './pages/Posting';
import Post from './pages/Post';
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import JoinPage from './pages/JoinPage'
import FriendRecommendationPage from './pages/FriendRecommendationPage'
import {Provider} from './Context.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <Router>
        <Provider>
          <NavigationBar />
          <Switch>
            <Route path="/board/:postId" component={Post} />
            <Route path="/writing_post" component={Posting} />
            <Route path="/login" component={LoginPage} />
            <Route path="/join" component={JoinPage}/>
            <Route path="/profile" component={ProfilePage} />
            <Route path="/friendRecommend" component={FriendRecommendationPage} />
            <Route exact path="/" component={Table} />         
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default App;