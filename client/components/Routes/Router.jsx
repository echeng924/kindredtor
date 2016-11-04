import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from '../App.jsx';
import Auth from '../Auth/Auth.jsx';
import Initial from '../Home/Initial.jsx';
import Dashboard from '../Dashboard/dashboard.jsx';
import DailyMatch from '../Matches/DailyMatch.jsx';
import Profile from '../profile.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={Initial} />
      <Route path='register' component={Auth} />
      <Route path='dashboard' component={Dashboard} />
      <Route path='matches' component={DailyMatch} />
      <Route path='profile' component={Profile} />
      </Route>
    </Router>
  );
};

export default Routes;
