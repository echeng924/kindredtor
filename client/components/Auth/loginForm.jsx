import React, { Component } from 'react';

const propTypes = {
  handleLoginSubmit: React.PropTypes.func,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLoginSubmit(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.email}
            name="email"
            placeholder="Enter Your Email"
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            value={this.state.password}
            name="password"
            placeholder="Enter Your Password"
            onChange={this.handleInputChange}
          />
          <input
            type="submit"
            value="Log In"
          />
        </form>
      </div>
    );
  }
}

export default LoginForm;
