import React, { Component } from 'react';

class Link extends Component {

  render() {

    return (
      <div>
        <a href={this.props.path}>{this.props.text}</a>
      </div>
      );
  }
};

export default Link;
