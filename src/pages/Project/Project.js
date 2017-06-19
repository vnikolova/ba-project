import React, { Component } from 'react';
import Main from '../../layouts/Main.js';
import axios from 'axios';
import { Row, Col } from 'react-flexbox-grid';
import { Text } from '../../components';
import theme from '../../theme.js';

class Project extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: {}
    };
  }

componentWillMount() {
  //get id from path
  const id = this.props.match.params.id;

  axios.get('/project/'+id).then(function(obj){
    return obj.data;
  }).then(json => {
    this.setState({
      data: json
    });
  });
}

  render() {
    let data = this.state.data;
    const style = {
      img: {
        width: "100%",
      },
      imgWrapper: {
        height: '350px',
        width: '100vw',
        backgroundImage:  `url("/img/hands.jpeg")`,
        backgroundSize: 'cover'
      },
      intro: {
        padding: theme.padding[3],
        backgroundColor: theme.colors.cream,
        opacity: '0.8'

      },
      dot: {
        display: 'inline-flex',
        width: '15px',
        height: '15px',
        borderRadius: '9999px',
        backgroundColor: theme.categoryColors[data.category] || theme.colors.grey
      }
    }
    return (
      <Main>
        <Row middle="xs" style={style.imgWrapper}>
          <Col xs={4} xsOffset={4} style={style.intro}>
            <h1>{data.title}</h1>
            <h4><div style={style.dot}></div>{data.category || "Not categorized"}</h4>
            <h3>Cause: {data.cause}</h3>
            <Text size="s">{data.deadline}</Text>
            <Text size="s">{data.location}</Text>
          </Col>
        </Row>
        <Row>
          <Col xs={6} xsOffset={3}>
            <p>{data.description}</p>
          </Col>
        </Row>
      </Main>
    )
  }
}

export default Project;
