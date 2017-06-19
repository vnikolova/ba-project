import React, { Component } from 'react';
import theme from '../../../theme.js';
import SearchIcon from 'material-ui/svg-icons/action/search';

class SearchBar extends Component {

constructor(props){
  super(props);

  this.state = {
    };
  }

  render() {
    const styles = {
      wrapper: {
        border: theme.border,
        borderRadius: theme.borderRadius,
        padding: theme.padding[4]
      },
      input: {
        outline: '1px transparent'
      }
    }
    const {style, onChange,...props} = this.props;

    const mergedStyle = Object.assign(styles.wrapper, style, {});
    return(
      <div className="row" style={mergedStyle}>
        <SearchIcon color={theme.colors.grey} /><input type="text" onChange={onChange} style={styles.input} placeholder="Search for projects" />
      </div>
    )
  }
}

export default SearchBar;
