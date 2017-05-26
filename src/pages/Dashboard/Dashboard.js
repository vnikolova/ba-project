import React, { Component } from 'react';
import {TopNav} from '../../components';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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
    const { userIsLoggedIn, redirect } = this.state;
    const message = userIsLoggedIn ? "Welcome to your dashboard " : "You need to be logged in to see this page";

    if(redirect){
      return <Redirect to='/'/>;
    }
    return (
      <div>
        <TopNav userIsLoggedIn={userIsLoggedIn} onLogoutClick={this.onLogout}/>
        <div className="col center">
	         <h1>{message}{this.state.userName}</h1>
         </div>
      </div>
      );
  }

};

export default Dashboard;
