/*
 * Copyright (C) 2017 Viktoriya Nikolova - All Rights Reserved.
 * No warranty, explicit or implicit, provided. In no event shall the author
 * be liable for any claim or damages.
 * This is proprietary software.
 */

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class FacebookButton extends Component {

  constructor(props) {
     super(props);

     this.FB = props.fb;

     this.state = {
       email: ""
     };

  }

  componentDidMount() {
     this.FB.Event.subscribe('auth.logout',
        this.onLogout.bind(this));
     this.FB.Event.subscribe('auth.onStatusChange',
        this.onStatusChange.bind(this));
  }

  onStatusChange(response) {
     if( response.status === "connected" ) {
        this.FB.api('/me', function(response) {
          console.log( response );
           this.setState({
              email: response.email
           });
        });
        axios.post('/api/users/fblogin',this.state).then(function(obj){
          return obj.data;
        }).then(json => {
          this.setState({
            redirect: true,
            isLoading: false
          });
        });
     }
  }

  onLogout(response) {
     this.setState({
        message: ""
     });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/dashboard'/>;
    }

     return (
        <div>
           <div
              className="fb-login-button"
              data-max-rows="1"
              data-size="large"
              data-button-type="login_with"
              data-use-continue-as="false"
              data-show-faces="false"
              data-auto-logout-link="true"
              >
           </div>
        </div>
     );
  }
};

export default FacebookButton;
