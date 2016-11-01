import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from '../App.jsx';

const Routes = () => {
  return(
    <Router history={hashHistory}>
      <Route path='/' component={App} />
    </Router>
  )
}

export default Routes;
