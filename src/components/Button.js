/*
 * Copyright (C) 2017 Viktoriya Nikolova - All Rights Reserved.
 * No warranty, explicit or implicit, provided. In no event shall the author
 * be liable for any claim or damages.
 * This is proprietary software.
 */
import React, { Component } from 'react';
import theme from '../theme.js';
import PropTypes from 'prop-types';
import './components.css';

class Button extends Component {

  render() {

    const className = this.props.main ? 'button-main' : '';

    return (
      <div>
        <input className={className} onClick={this.props.onClick} type="button" value={this.props.text} />
      </div>
      );
  }
};

Button.propTypes = {
  text: PropTypes.string,
  main: PropTypes.bool
}

export default Button;
