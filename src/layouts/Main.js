import React, { Component } from 'react';
import {TopNav} from '../components';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Main extends Component {

constructor(props){
  super(props);

  this.state = {
    userIsLoggedIn: false,
    user: {},
    redirect: false
    };

  this.onLogout = this.onLogout.bind(this);
  }

  componentWillMount(){

    axios.get('/api',this.state).then(function(obj){
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


    if(redirect){
      return <Redirect to='/'/>;
    }

    return(
      <div>
        <TopNav userIsLoggedIn={userIsLoggedIn} userName={user.name} onLogoutClick={this.onLogout}/>
        {this.props.children}
      </div>
    )
  }
}

export default Main;
