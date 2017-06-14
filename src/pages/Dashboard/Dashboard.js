import React, { Component } from 'react';
import ProjectIcon from 'material-ui/svg-icons/action/class';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { Avatar, RaisedButton, Paper } from 'material-ui';
import theme from '../../theme.js';
import {Row, Col} from 'react-flexbox-grid';
import Main from '../../layouts/Main.js';

class Dashboard extends Component {

  render() {
    const { userIsLoggedIn } = this.props;
    const message = userIsLoggedIn ? "Welcome to your dashboard " : "You need to be logged in to see this page";
    const style = {
      paper: {
        padding: theme.padding[5],
        marginTop:'10px',
        marginBottom: '80px'
      }
    }

    return (
      <Main>
        <h1 className="center">{message}</h1>

        <Row>
          <Col xs={4} className="center">
               <Avatar src="../../images/music-bg.jpeg" size={150} />
              <div><span>{}</span></div>
              <div><span>{}</span></div>
              <br /><br />
              <RaisedButton
                label="Edit profile"
              />
           </Col>

           <Col xs={6} xsOffset={1}>
             <Paper style={style.paper}>
               <h2><ProjectIcon />Projects contributing to:</h2>
              <RaisedButton
                href="/search"
                label="Search projects"
                icon={<SearchIcon />}
              />
             </Paper>

             <Paper style={style.paper}>
               <h2><ProjectIcon />organized by you:</h2>
              <RaisedButton
                href="/create"
                label="create a project"
                icon={<AddIcon />}
              />
             </Paper>
          </Col>

        </Row>
      </Main>
      );
  }

};

export default Dashboard;
