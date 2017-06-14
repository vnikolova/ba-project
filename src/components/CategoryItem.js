/*
 * Copyright (C) 2017 Viktoriya Nikolova - All Rights Reserved.
 * No warranty, explicit or implicit, provided. In no event shall the author
 * be liable for any claim or damages.
 * This is proprietary software.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Paper} from 'material-ui';
import theme from '../theme.js';

const CategoryItem = (props) => {
  const {size, color, ...prop} = props;
  
    const iconStyle = {
      height: size / 5 || '64px',
      width: '64px',
      color: theme.colors.grey
    }
    const style = {
      height: size || 250,
      padding: theme.padding[6],
      width: '100%',
      margin: 20,
      cursor: 'pointer',
      textAlign: 'center',
      display: 'inline-block',
      borderBottom: '5px solid',
      borderColor: color
    };

    return (
      <Paper {...prop} style={style} zDepth={2}>
        <h3>{props.title}</h3>
        { props.icon ?
          React.cloneElement(props.icon, {style:iconStyle }, {})
        : ''}
      </Paper>
      );
};

CategoryItem.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.object

}
export default CategoryItem;
