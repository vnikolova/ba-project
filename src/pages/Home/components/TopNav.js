/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles.css';

class TopNav extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
	 <img src={logo} className="App-logo" alt="logo" />
	 <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
	 To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      );
  }
}
;

export default TopNav;