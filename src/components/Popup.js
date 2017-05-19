import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button} from './';

class Popup extends Component {

  render() {

    return (
      <div className="overlay">
        <div className="popup">
          <h2>{this.props.title}</h2>
          <Button className="close" simple text="x"/>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
      );
  }
};

Popup.propTypes = {
  open: PropTypes.bool
}

export default Popup;
