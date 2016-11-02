import React, { Component } from 'react';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',

    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
        />
        <select>
          <option value="A">Location:</option>
          <option value="A">Apple</option>
          <option value="B">Banana</option>
        </select>
        <input
          type="text"
          name="current_title"
          placeholder="Current Title"
        />
        <select defaultValue="currentIndustry">
          <option value="A">Current Industry:</option>
          <option value="A">Apple</option>
          <option value="B">Banana</option>
        </select>
        <select>
          <option value="A">Languages:</option>
          <option value="A">Apple</option>
          <option value="B">Banana</option>
        </select>
        <textarea
          name="blurb"
          placeholder="Tell us about you."
        />
        <input type="submit" value="Submit" />
      </div>
    )
  }
}
export default RegisterForm;
