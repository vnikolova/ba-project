import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Chip} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import PropType from 'prop-types';

class GridItem extends Component {

  render() {
    const styles = {
      chip: {
        margin: '4px'
      }
    };

    const { title, text } = this.props;
    const date = '16/12/16';

    return(
      <Card>
        <CardHeader
          title="URL Avatar"
          subtitle={date}
          avatar="images/tech-bg.jpg"
        />

        <CardTitle title={title}/>
          <Chip
            style={styles.chip}
          >
            Text Chip
          </Chip>

        <CardText>
          {text}
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
