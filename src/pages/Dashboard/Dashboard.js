import React, { Component } from 'react';
import ProjectIcon from 'material-ui/svg-icons/action/class';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { Avatar, RaisedButton, Paper } from 'material-ui';
import theme from '../../theme.js';
import {Row, Col} from 'react-flexbox-grid';
import Main from '../../layouts/Main.js';
import axios from 'axios';
import ProjectItem from './components/ProjectItem.js';

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {},
      projects: []
    };
  }

  componentWillMount() {

    axios.get('/api',this.state).then(function(obj){
      return obj.data;
    }).then(json => {
      this.setState({
        user: json
      });
      this.appendProjects();

    });
  };

appendProjects() {
  axios.get('/projects/'+this.state.user._id, {}).then(function(obj){
   return obj.data;
    }).then(json => {
   this.setState({
     projects: json
   });
 });
}

  render() {
    const style = {
      paper: {
        padding: theme.padding[5],
        marginTop:'10px',
        marginBottom: '80px',
        borderRight: '4px solid',
        borderColor: theme.colors.primaryGreen
      },
      bordered: {
        padding: theme.padding[5],
        marginTop:'10px',
        textAlign: 'center',
        marginBottom: '80px',
        borderBottom: '4px solid',
        borderColor: theme.colors.primaryBlue
      }
    }

    const { user } = this.state;

    return (
      <Main>
        <Row top="xs">
          <Col xs={3} xsOffset={1}>
            <Paper style={style.bordered}>
               <Avatar src="img/user.png" size={150} />
               <div><span>{user.name}</span></div>
              <div><span>{user.email}</span></div>
              <br /><br />
              <RaisedButton
                label="Edit profile"
              />
            </Paper>
           </Col>

           <Col xs={6} xsOffset={1}>
             <Paper style={style.paper}>
               <h2><ProjectIcon color={theme.colors.grey} />Projects contributing to:</h2>
              <RaisedButton
                href="/search"
                label="Search projects"
                icon={<SearchIcon color={theme.colors.grey} />}
              />
             </Paper>

             <Paper style={style.paper}>
               <h2><ProjectIcon color={theme.colors.grey} />organized by you:</h2>
               {this.state.projects.map((project) => (
                  <ProjectItem project={project}/>)
             )}
             <RaisedButton
              style={{marginTop: '30px'}}
               href="/create"
               label="create a project"
               icon={<AddIcon color={theme.colors.grey} />}
             />
             </Paper>
          </Col>

        </Row>
      </Main>
      );
  }

};

export default Dashboard;
