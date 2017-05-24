/*
 * Copyright (C) 2017 Viktoriya Nikolova - All Rights Reserved.
 * No warranty, explicit or implicit, provided. In no event shall the author
 * be liable for any claim or damages.
 * This is proprietary software.
 */

import React, { Component } from 'react';

class Button extends Component {

  constructor(props) {
     super(props);

     this.FB = props.fb;

     this.state = {
        message: ""
     };

  }

  componentDidMount() {
     this.FB.Event.subscribe('auth.logout',
        this.onLogout.bind(this));
     this.FB.Event.subscribe('auth.statusChange',
        this.onStatusChange.bind(this));
  }

  onStatusChange(response) {
     console.log( response );

     if( response.status === "connected" ) {
        this.FB.api('/me', function(response) {
          //set user session
           var message = "Welcome " + response.name;
           this.setState({
              message: message
           });
        })
     }
  }

  onLogout(response) {
     this.setState({
        message: ""
     });
  }

  render() {
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
           <div>{this.state.message}</div>
        </div>
     );
  }
};

export default Button;
