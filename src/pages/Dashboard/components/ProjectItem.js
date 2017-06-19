import React, { Component } from 'react';
import { Paper } from 'material-ui';
import theme from '../../../theme.js';
import { Link } from 'react-router-dom';

class ProjectItem extends Component {
  render() {
    const project = this.props.project;
    const color = project.category ? theme.categoryColors[project.category] : theme.colors.grey;
    const projectLink = "/project/"+project._id;
    const style = {
      paper: {
        padding: theme.padding[1],
        margin: '10px',
        borderLeft: '4px solid',
        borderColor: color
      }
    }
    return (
    <Link to={projectLink} className="router-link">
      <Paper style={style.paper}>
        <h3>{project.title}</h3>
      </Paper>
    </Link>
    )
  }
}

export default ProjectItem;
