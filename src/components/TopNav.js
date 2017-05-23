/*
 * Copyright (C) 2017 Viktoriya Nikolova - All Rights Reserved.
 * No warranty, explicit or implicit, provided. In no event shall the author
 * be liable for any claim or damages.
 * This is proprietary software.
 */
import React, { Component } from 'react';
import {Button} from './';
import {RaiseLogo} from '../icons';
import theme from '../theme.js';

class TopNav extends Component {

  render() {
    const styles = {
      wrapper: {
        backgroundColor: theme.colors.cream,
        padding: theme.padding[5],
        borderBottom: theme.border
      },
      span: {
        marginLeft: '8px'
      }
    };
    return (
      <div className="row around" style={styles.wrapper}>
        <div className="col inline logo-text">
          <RaiseLogo height="30px"/><span style={styles.span}>raise.</span>
        </div>
        <div className="col center">
          <Button text="Log In/ Sign Up" onClick={this.props.onLoginClick} />
        </div>
      </div>
      );
  }
};

export default TopNav;
