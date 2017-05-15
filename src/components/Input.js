/*
 * Copyright (C) 2017 Viktoriya Nikolova - All Rights Reserved.
 * No warranty, explicit or implicit, provided. In no event shall the author
 * be liable for any claim or damages.
 * This is proprietary software.
 */
import React, { Component } from 'react';
import theme from '../theme.js';

class Input extends Component {

  render() {
    const styles = {
      padding: theme.padding[4],
      border: 'none',
    };
    return (
      <div>
        <input style={styles} type="text" placeholder={this.props.text} />
      </div>
      );
  }
};

export default Input;
