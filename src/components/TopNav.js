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
import {IconMenu, MenuItem, IconButton} from 'material-ui';
import PersonIcon from 'material-ui/svg-icons/social/person';
import ArrowDownIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

class TopNav extends Component {

constructor(props){
  super(props);

  this.state = {

  };

  this.onLogoutClick = this.onLogoutClick.bind(this);
}

onLogoutClick() {

};
  render() {
    const { userIsLoggedIn, simple }  = this.props;
    const style ={
      userMenuIcons: {
        display: 'inline'
      },
      wrapper: {
        alignItems: 'center'
      }
    };

    const userLinks = (
      <div className="row center" style={style.wrapper}>
      <PersonIcon />
      {this.props.userName}
      <IconMenu
        iconButtonElement={<IconButton style={style.userMenuIcons}><ArrowDownIcon /></IconButton>}
        anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <Link to="dashboard" className="router-link"><MenuItem primaryText="Dashboard" onClick={this.onDashboardMenuClick} /></Link>
        <Link to="settings" className="router-link"><MenuItem primaryText="Settings" onClick={this.onSettingsMenuClick} /></Link>
        <MenuItem primaryText="Log out" onTouchTap={this.props.onLogoutClick} />
      </IconMenu>
      <IconMenu
        iconButtonElement={<IconButton style={style.userMenuIcons}><MenuIcon /></IconButton>}
        anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <Link to="search" className="router-link"><MenuItem primaryText="Search" /></Link>
        <Link to="create" className="router-link"><MenuItem primaryText="Create new" /></Link>
      </IconMenu>
      </div>
    );

    const guestLinks = (
      <div>
      <Button text="Log In/ Sign Up" onClick={this.props.onLoginClick} />

      </div>
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
        <div className="col inline center logo-text">
          <Link style={{textDecoration: 'none', color: 'black'}} to={logoLinkPath}><RaiseLogo height="30px"/>raise.</Link>
        </div>
        <div className="col center">
          { userIsLoggedIn ? userLinks : simple ? '' : guestLinks }
        </div>
      </div>
      );
  }
};

TopNav.propTypes = {
  userIsLoggedIn: PropTypes.bool,
  simple: PropTypes.bool
};

TopNav.defaultProps = {
  userIsLoggedIn: false,
  simple: false
};

export default TopNav;
