import React, { Component } from 'react';
import request from 'superagent';
import { Link, withRouter } from 'react-router';
import Connection from './connection.jsx';




class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      matches: [],
    };
    this.profileUpdated = this.profileUpdated.bind(this)
;    this.getAllMatches = this.getAllMatches.bind(this);
  }
  componentDidMount() {
    if(this.props.profile && this.props.profile.id) {
      this.profileUpdated();
    }
  }

  profileUpdated() {
    this.getAllMatches();
  }

  //settimeout somewhere...because we'll call the function on componentDidMount, but after updateAuth()
  getAllMatches() {
    console.log(this.props.profile.id);
    request.get(`/api/members/${this.props.profile.id}`)
           .then((matches) => {
             this.setState({ matches: matches.body });
           }).catch((err) => {
              console.log(err);
           });
  }

  render() {
    const dashboardElements = this.state.matches.map((indvMatch, idx) => {
        return (
          <div className="profile" key={idx}>
            <div className="image"><img src={`/api/members/${indvMatch.id}/picture`}/></div>
            <div>First Name: {indvMatch.first_name}</div>
            <div>Last Name: {indvMatch.last_name}</div>
            <div>Email: {indvMatch.email}</div>
            <div>Current Title: {indvMatch.current_title}</div>
            <div>Current Industry: {indvMatch.current_industry}</div>
            <div>Tech Language: {indvMatch.interested_tech}</div>
            <div>About Them: {indvMatch.blurb}</div>
          </div>
        );
      });

    return (
      <div className="dashboardPage">
        <h1>Dashboard</h1>
        <h4>See all your matches below</h4>
        { dashboardElements }
      </div>
    );
  }
}

export default Dashboard;

