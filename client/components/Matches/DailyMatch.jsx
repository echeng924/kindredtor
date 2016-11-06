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
      <div>
        Will show matches...what should be returned:
        <div id="matchProfile">
          <p><img width="200" src="/auth/picture"/></p>
          <p>First Name: {this.state.match.first_name}</p>
          <p>Current Title: {this.state.match.current_title}</p>
          <p>Current Industry: {this.state.match.current_industry}</p>
          <p>Tech language: {this.state.match.interested_tech}</p>
          <p>About them: {this.state.match.blurb}</p>
          <button onClick={this.matchButtonFunction}>Match</button>
          <button onClick={this.getOneProfileMatch}>Pass</button>
        </div>
      </div>
    );
  }
}

export default DailyMatch;

