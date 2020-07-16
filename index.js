import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './app/screens/Home';
import User from './app/screens/User';
import Leaderboard from './app/screens/Leaderboard';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/styles.css';
import './assets/grid.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/leaderboard" component={Leaderboard} />
    <Route path="/product/:username" component={User} />
    
  </Router>,
  document.getElementById('container')
);