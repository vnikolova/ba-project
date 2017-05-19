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
      },
      cats: {
        height: '45vh',
        backgroundColor: theme.colors.cream
      }
    }
    return (
      <div className="col">
	       <TopNav />
        { /* section one intro */}
           <div className="row around middle" style={style.intro}>
              <div className="col center">
                <h1>Meet your new team. Build your ideas.</h1>
                <p>No more time-wasting. No BS. </p>
                <Button main text="Sign me up!" onMouseDown={this.onLoginButtonClick}/>
              </div>
              <div className="col center">
              </div>
           </div>
           { /* section two - categories */}
           <div className="row around middle" style={style.cats}>
            <div className="col">
            <h2>Discover our categories</h2>
            <div className="row">
                <div className="col category">
                  <h3>Science</h3>
                  <p>A space for any proejcts related to science and research</p>
                </div>
            </div>
          </div>
           </div>
           <Popup open={this.state.loginModalIsOpen} title="Sign In">
           </Popup>
      </div>
      );
  }

};

export default Home;
