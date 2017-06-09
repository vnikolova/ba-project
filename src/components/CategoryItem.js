/*
 * Copyright (C) 2017 Viktoriya Nikolova - All Rights Reserved.
 * No warranty, explicit or implicit, provided. In no event shall the author
 * be liable for any claim or damages.
 * This is proprietary software.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Paper} from 'material-ui';
import theme from '../theme.js';

const style = {
  height: 250,
  padding: theme.padding[6],
  width: '100%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const CategoryItem = (props) => {

    return (
      <Paper style={style} zDepth={2} >
        <h3>{props.title}</h3>
      </Paper>
      );
};

export default CategoryItem;
