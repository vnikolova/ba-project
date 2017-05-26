/*
 * Copyright (C) 2017 Viktoriya Nikolova - All Rights Reserved.
 * No warranty, explicit or implicit, provided. In no event shall the author
 * be liable for any claim or damages.
 * This is proprietary software.
 */
 /*global FB*/

import React, { Component } from 'react';
import theme from '../theme.js';
import {FacebookButton, Button,Text, LoginForm, SignUpForm } from './';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignUpRequest } from '../actions/signupActions';

class LoginSection extends Component {
  constructor(props){
    super(props);

    this.state = {
      loginActive: true
    };
  }

  setLoginActive() {
    this.setState({
      loginActive: !this.state.loginActive
    });
  }

  render() {
    const style = {
      wrapper: {
        padding: theme.padding[5]
      }
    };

    const formSection = this.state.loginActive ? <LoginForm /> : <SignUpForm userSignUpRequest={userSignUpRequest}/>;
    const switchText = this.state.loginActive ? "Not a user yet? Click to register." : "Already a user? Click to log in with email.";

    return (
    <div style={style.wrapper}>
      <Text>Sign in to start joining projects and supporting causes that matter most to you.</Text>
      <div id="fb-root"></div>
      <div className="center" id="facebook-login">
        <FacebookButton fb={FB} />
      </div>
      <div className="center">or</div>
      {formSection}
      <Button text={switchText} onClick={() => this.setLoginActive()} />
      <Text color={theme.colors.disabled} size="s">To use Raise you must have cookies enabled. If you sign up with Facebook,
      we’ll start you off with a network by automatically importing any friends already on Facebook.
      Also, we’ll never post to Facebook without your permission.</Text>
    </div>
      );
  }
};


LoginSection.PropTypes = {
  loginActive: PropTypes.bool
}

export default connect(null, {userSignUpRequest})(LoginSection);
