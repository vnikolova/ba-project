/*
 * Copyright (C) 2017 Viktoriya Nikolova - All Rights Reserved.
 * No warranty, explicit or implicit, provided. In no event shall the author
 * be liable for any claim or damages.
 * This is proprietary software.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  render() {
    const { main,text, ...props} = this.props;
    const className = main ? 'button-main' : 'button-no-style';

    return (
      <div>
        <input {...props} className={className} type="button" value={text} />
      </div>
      );
  }
};

Button.propTypes = {
  text: PropTypes.string,
  main: PropTypes.bool
}

export default Button;
