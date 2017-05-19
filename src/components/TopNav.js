/*
 * Copyright (C) 2017 Viktoriya Nikolova - All Rights Reserved.
 * No warranty, explicit or implicit, provided. In no event shall the author
 * be liable for any claim or damages.
 * This is proprietary software.
 */
import React, { Component } from 'react';
import {Link} from './';
import theme from '../theme.js';

class TopNav extends Component {

  render() {
    const styles = {
      wrapper: {
        backgroundColor: theme.colors.cream,
        padding: theme.padding[5],
        borderBottom: theme.border
        }
    };
    return (
      <div className="row around" style={styles.wrapper}>
        <div className="col">
          [LOGO]
        </div>
        <div className="col">
          <Link text="Login" href="/login" />
        </div>
      </div>
      );
  }
};

export default TopNav;
