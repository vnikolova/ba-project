import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {Chip} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import PropType from 'prop-types';
import axios from 'axios';
import theme from '../../../theme.js';

class GridItem extends Component {

  render() {
    const { data } = this.props;

    const borderColor = data.category === 'Technology' ? theme.colors.primaryBlue :
    data.category === 'Community' ? theme.colors.primaryGreen :
    data.category === 'Music' ? theme.colors.music :
    data.category === 'Sports' ? theme.colors.sports :
    data.category === 'Science' ? theme.colors.science :
    data.category === 'Film' ? theme.colors.film :
    theme.colors.grey;

    const styles = {
      chip: {
        margin: '4px'
      },
      card: {
        borderRight: '4px solid',
        borderColor: borderColor
      }
    };


    return(
      <Card style={styles.card}>
        <CardHeader
          title='username'
          subtitle={data.updated}
          avatar="img/user.png"
        />

        <CardTitle title={data.title}/>
          <Chip
            style={styles.chip}
          >
            {data.category}
          </Chip>

        <CardText>
          {data.description}
        </CardText>
        <CardActions>
          <FlatButton label="Read More" />
          <FlatButton label="Apply" />
        </CardActions>
      </Card>
    )
  }
}

GridItem.propTypes = {
  title: PropType.string,
  text: PropType.string
};

export default GridItem;
