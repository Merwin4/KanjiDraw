import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input onChange={this.onChange} type="text" name="username" className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input onChange={this.onChange} type="text" name="email" className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input onChange={this.onChange} type="text" name="password" className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Password Confirmation</label>
          <input onChange={this.onChange} type="text" name="passwordConfirmation" className="form-control" />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
          Sign Up
          </button>
        </div>

      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;
