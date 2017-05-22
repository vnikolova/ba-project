import React, { Component } from 'react';
import theme from '../theme.js';

class Text extends Component {

  render() {
    const {size, color} = {...this.props};
    const style = {
      color: color ? color : '#000',
      fontSize: size === 's' ? theme.fontSizes[0] : theme.fontSizes[1]
    }
    return (
      <div>
        <p style={style}>{this.props.children}</p>
      </div>
      );
  }
};

export default Text;
