import React, { Component } from 'react';
import {TopNav} from '../../components';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import ProjectIcon from 'material-ui/svg-icons/action/class';
import AddIcon from 'material-ui/svg-icons/content/add-circle';

class Dashboard extends Component {

constructor(props){
  super(props);

  this.state = {
    userIsLoggedIn: false,
    userName: '',
    redirect: false
  };

  this.onLogout = this.onLogout.bind(this);
};

componentDidMount(){

  axios.get('/dashboard',this.state).then(function(obj){
    return obj.data;
  }).then(json => {
    this.setState({
      userIsLoggedIn: true,
      userName: json.name
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
    const { userIsLoggedIn, userName, redirect } = this.state;
    const message = userIsLoggedIn ? "Welcome to your dashboard " : "You need to be logged in to see this page";
    const style = {
      projectsWrapper: {
        border: '1px solid black',
        width: '80%',
        marginLeft: '10%'
      }
    }
    if(redirect){
      return <Redirect to='/'/>;
    }
    return (
      <div>
        <TopNav userIsLoggedIn={userIsLoggedIn} userName={userName} onLogoutClick={this.onLogout}/>
        <div className="col center">
          <h1>{message}{this.state.userName}</h1>
          <div style={style.projectsWrapper}>
            <h2><ProjectIcon />Your projects</h2>
            <p>It feels lonely up in here. What are your hobbies, {userName}? Its time to make use of them.</p>
            <AddIcon />Search and add a project now.
          </div>
         </div>
      </div>
      );
  }

};

export default Dashboard;
