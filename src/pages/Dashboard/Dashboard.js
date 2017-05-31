import React, { Component } from 'react';
import {TopNav} from '../../components';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import ProjectIcon from 'material-ui/svg-icons/action/class';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { Avatar, RaisedButton, Paper } from 'material-ui';
import theme from '../../theme.js';
import {Row, Col} from 'react-flexbox-grid';

class Dashboard extends Component {

constructor(props){
  super(props);

  this.state = {
    userIsLoggedIn: false,
    user: {},
    redirect: false
  };

  this.onLogout = this.onLogout.bind(this);
};

componentWillMount(){

  axios.get('/dashboard',this.state).then(function(obj){
    return obj.data;
  }).then(json => {
    this.setState({
      userIsLoggedIn: true,
      user: json
    });
  });
};

onLogout() {
  axios.get('api/users/logout',this.state).then(data => {
    this.setState({
      redirect: true
    })
  });
};

  render() {
    const { userIsLoggedIn, user, redirect } = this.state;
    const message = userIsLoggedIn ? "Welcome to your dashboard " : "You need to be logged in to see this page";
    const style = {
      paper: {
        padding: theme.padding[5],
        marginTop:'10px',
        marginBottom: '80px'
      }
    }
    if(redirect){
      return <Redirect to='/'/>;
    }
    return (
      <div>
        <TopNav userIsLoggedIn={userIsLoggedIn} userName={user.name} onLogoutClick={this.onLogout}/>
        <h1 className="center">{message}</h1>

        <Row>
          <Col xs={4} className="center">
               <Avatar src="../../images/music-bg.jpeg" size={150} />
              <div><span>{user.name}</span></div>
              <div><span>{user.email}</span></div>
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
      </div>
      );
  }

};

export default Dashboard;
