import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {Chip} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import PropType from 'prop-types';
import axios from 'axios';
import theme from '../../../theme.js';
import { Link } from 'react-router-dom';

class GridItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
  }
  onMouseOver = () => {
    this.setState({
      hover: true
    });
  }

  onMouseOut = () => {
    this.setState({
      hover: false
    });
  }
  render() {
    const { data } = this.props;

    const borderColor = data.category === 'Technology' ? theme.colors.primaryBlue :
    data.category === 'Community' ? theme.colors.primaryGreen :
    data.category === 'Music' ? theme.colors.music :
    data.category === 'Sports' ? theme.colors.sports :
    data.category === 'Science' ? theme.colors.science :
    data.category === 'Film' ? theme.colors.film :
    theme.colors.grey;

    const itemLink ="/project/"+data._id;
    const styles = {
      chip: {
        margin: '4px'
      },
      card: {
        borderRight: '4px solid',
        borderColor: borderColor,
        backgroundColor: this.state.hover ? theme.colors.cream : ''
      }
    };


    return(
    <Link to={itemLink} className="router-link">
      <Card
        onMouseEnter={this.onMouseOver.bind(this)}
        onMouseLeave={this.onMouseOut.bind(this)}
        style={styles.card}
      >
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
    </Link>
    )
  }
}

GridItem.propTypes = {
  title: PropType.string,
  text: PropType.string
};

export default GridItem;
