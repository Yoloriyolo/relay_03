import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';

import Table from './pages/Table';
import Posting from './pages/Posting';
import Post from './pages/Post';
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
          <Route path="/board" component={Post} />
          <Route path="/writing_post">
            <Posting />
          </Route>
          <Route path="/">
            <Table />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;