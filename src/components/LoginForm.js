/*
 * Copyright (C) 2017 Viktoriya Nikolova - All Rights Reserved.
 * No warranty, explicit or implicit, provided. In no event shall the author
 * be liable for any claim or damages.
 * This is proprietary software.
 */
 /*global FB*/

import React, { Component } from 'react';
import theme from '../theme.js';
import {FacebookButton, Input, Button } from './';

class LoginForm extends Component {

  render() {
    const style = {
      email: {
        width: '250px'
      }
    };
    return (
    <div>
      <p>Sign in to start joining projects and supporting causes that matter most to you.</p>
      <div id="fb-root"></div>
      <div id="facebook-login">
        <FacebookButton fb={FB} />
      </div>
      <span>or</span>
      <div className="col" style={style.email}>
        <Input text="Enter your e-mail" />
        <Button text="Continue" icon="" />
      </div>
      <p>To use Flow you must have cookies enabled. If you sign up with Facebook,
      we’ll start you off with a network by automatically importing any friends already on Facebook.
      Also, we’ll never post to Facebook without your permission.</p>
    </div>
      );
  }
};

export default LoginForm;
