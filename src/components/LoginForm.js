/*
 * Copyright (C) 2017 Viktoriya Nikolova - All Rights Reserved.
 * No warranty, explicit or implicit, provided. In no event shall the author
 * be liable for any claim or damages.
 * This is proprietary software.
 */
 /*global FB*/

import React, { Component } from 'react';
import theme from '../theme.js';
import {FacebookButton, Input, Button,Text } from './';

class LoginForm extends Component {

  render() {
    const style = {
      wrapper: {
        padding: theme.padding[5]
      },
      email: {
        width: '80%',
        margin: '0 auto',
      }
    };
    return (
    <div style={style.wrapper}>
      <Text>Sign in to start joining projects and supporting causes that matter most to you.</Text>
      <div id="fb-root"></div>
      <div className="center" id="facebook-login">
        <FacebookButton fb={FB} />
      </div>
      <div className="center">or</div>
      <div className="col center" style={style.email}>
        <Input text="Enter your e-mail" />
        <Button main text="Continue" icon="" />
      </div>
      <Text color={theme.colors.disabled} size="s">To use Raise you must have cookies enabled. If you sign up with Facebook,
      we’ll start you off with a network by automatically importing any friends already on Facebook.
      Also, we’ll never post to Facebook without your permission.</Text>
    </div>
      );
  }
};

export default LoginForm;
