import React, { Component } from 'react';
import { Link } from 'react-router';
import About from './about.jsx';

class Initial extends Component {
  constructor() {
    super();
    this.state = {
      time: "",
    };
  }
  setTime(){
    let currentdate = new Date();
    let hours = currentdate.getHours();
    let ampm = (hours >=12) ? "pm": "am";
    if (hours == 0) {
      hours = "12";
    } else if (hours > 12) {
      hours = hours - 12;
    }
    if (hours < 10) hours = `0${hours}`;
    let minutes = currentdate.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;
    let seconds = currentdate.getSeconds();
    if (seconds < 10) seconds = `0${seconds}`;
    this.setState({
      time: `${currentdate.getMonth()+1}/${currentdate.getDate()}/${currentdate.getFullYear()} | ${hours}:${minutes}:${seconds} ${ampm}`,
    });
  }
  componentWillMount() {
    this.setTime();
  }
  componentWillUnmount() {
    window.clearInterval(this.timer);
  }
  componentDidMount() {
    this.timer = window.setInterval(function () {
      this.setTime();
    }.bind(this), 1000);
  }
  render() {
    return (
      <div>
        <div className="homeSplash">
          <div className="content">
            <div className="time">{this.state.time}</div>
            <div>Let us help you,</div>
            <div>network smarter.</div>
            <div>
              <Link to='/register' className="button">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <About />
      </div>
    );
  }
}

export default Initial;
