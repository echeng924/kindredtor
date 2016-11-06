import React, { Component } from 'react';
import request from 'superagent';

class DailyMatch extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      match: {},
    };

    this.profileUpdated = this.profileUpdated.bind(this);
    this.handlePostToDb = this.handlePostToDb.bind(this);
    this.matchButtonFunction = this.matchButtonFunction.bind(this);
    this.getOneProfileMatch = this.getOneProfileMatch.bind(this);
  }
  componentDidMount() {
    if (this.props.profile && this.props.profile.role)
      this.profileUpdated();
  }
  profileUpdated() {
    this.getOneProfileMatch();
  }

  //add onclick for next match on decline match button
  getOneProfileMatch() {
    let roleSelection;
    if(this.props.profile.role === 'Mentor') {
      roleSelection = 'Mentee';
    } else {
      roleSelection = 'Mentor';
    }

    request.get(`/api/members?interested_tech=${this.props.profile.interested_tech}&role=${roleSelection}`)
           .then((match) => {
              this.setState({ match: match.body });
           })
  }
  handlePostToDb() {
    let matchData = ({
      member_id1: this.props.profile.id,
      member_id2: this.state.match.id,
    });
    console.log(matchData);
    request.post('/api/matches')
           .send(matchData)
           .then(() => {
              console.log('successfully posted to matchdb');
           })
           .catch((error) => {
              console.log(error);
           });
  }

  matchButtonFunction() {
    this.handlePostToDb();
    this.getOneProfileMatch();
  }

  render() {
    return (
      <div className="matchPage">
        <div className="description">
          <h1>Matches</h1>
          <h4>Click <mark>Match</mark> to connect or <mark>Pass</mark> to get another match</h4>
        </div>
        <div className="profile">
          <div><img src={`/api/members/${this.state.match.id}/picture`}/></div>
          <div>First Name: {this.state.match.first_name}</div>
          <div>Current Title: {this.state.match.current_title}</div>
          <div>Current Industry: {this.state.match.current_industry}</div>
          <div>Tech language: {this.state.match.interested_tech}</div>
          <div>About them: {this.state.match.blurb}</div>
          <div className="buttons">
            <button onClick={this.matchButtonFunction}>Match</button>
            <button onClick={this.getOneProfileMatch}>Pass</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DailyMatch;

