import React, { Component } from 'react';
import request from 'superagent';

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Will render a dashboard all matches.
      </div>
    );
  }
}

export default Dashboard;


//get All request to server for matches at '/api/matches'
