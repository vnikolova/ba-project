import React, { Component } from 'react';
import theme from '../../../theme.js';

class SearchBar extends Component {

constructor(props){
  super(props);

  this.state = {
    };
  }

  render() {
    const style = {
      wrapper: {
        border: theme.border,
        borderRadius: theme.borderRadius,
        padding: theme.padding[4]
      },
      input: {
        outline: '1px transparent'
      }
    }
    return(
      <div style={style.wrapper}>
        <input type="text" style={style.input} placeholder="Search for projects" />
      </div>
    )
  }
}

export default SearchBar;
