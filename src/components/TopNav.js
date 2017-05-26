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
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class TopNav extends Component {

  render() {
    const { userIsLoggedIn }  = this.props;

    const userLinks = (
      <Button text="Log out" onClick={this.props.onLogoutClick} />
    );

    const guestLinks = (
      <Button text="Log In/ Sign Up" onClick={this.props.onLoginClick} />
    );

    const styles = {
      wrapper: {
        backgroundColor: theme.colors.cream,
        padding: theme.padding[2],
        borderBottom: theme.border
      },
      span: {
        marginLeft: '8px'
      }
    };
    const logoLinkPath = userIsLoggedIn ? '/dashboard' : '/';
    
    return (
      <div className="row around" style={styles.wrapper}>
        <div className="col inline logo-text">
          <Link style={{textDecoration: 'none', color: 'black'}} to={logoLinkPath}><RaiseLogo height="30px"/><span style={styles.span}>raise.</span></Link>
        </div>
        <div className="col center">
          { userIsLoggedIn ? userLinks : guestLinks }
        </div>
      </div>
      );
  }
};

TopNav.propTypes = {
  userIsLoggedIn: PropTypes.bool
};

TopNav.defaultProps = {
  userIsLoggedIn: false
};

export default TopNav;
