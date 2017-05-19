/*
 *  Copyright � Vik Nikolova 2017
 *  This code has been written by Viktoriya Nikolova as part of her final bachelor project
 *  It is not to be used for commercial use.
 */

import React, { Component } from 'react';
import {TopNav, Button,Popup, LoginForm} from '../../components';
import theme from '../../theme.js';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginModalIsOpen: false
    };

    // This binding is necessary to make `this` work in the callback
    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
  }

  onLoginButtonClick() {
    this.setState(prevState=> ({
      loginModalIsOpen: true
    }));
  }

  render() {
    const style = {
      intro: {
        height: '55vh',
        backgroundColor: theme.colors.background
      }
    }
    return (
      <div className="col">
	       <TopNav />
           <div className="row around middle" style={style.intro}>
              <div className="col center">
                <h1>Meet your new team. Build your ideas.</h1>
                <p>No more time-wasting. No BS. </p>
                <Button main text="Sign me up!" onMouseDown={this.onLoginButtonClick}/>
              </div>
              <div className="col center">
              </div>
           </div>

           <Popup open={this.state.loginModalIsOpen}>
            <LoginForm />
           </Popup>
      </div>
      );
  }

};

export default Home;
