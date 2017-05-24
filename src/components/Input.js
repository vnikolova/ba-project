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
    };
    
    const {text,...props} = {...this.props};
    return (
      <div>
        <input {...props} style={styles} placeholder={text} />
      </div>
      );
  }
};

export default Input;
