import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Table from './Table';
import Posting from './Posting';
import Post from './components/Post';
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
          <Route path="/hi">
            <div>a</div>
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