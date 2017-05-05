/*
 *  Copyright � Vik Nikolova 2017
 *  This code has been written by Viktoriya Nikolova as part of her final bachelor project
 *  It is not to be used for commercial use.
 */
import React, { Component } from 'react';
import {TopNav, SearchBar} from '../../components';
import {IntroSection} from './components';

class Home extends Component {
  render() {
    return (
      <div>
	       <TopNav />
           <div>
          { /** Intro section begin
           * add background video
           **/}
           <SearchBar />
           </div>
      </div>
      );
  }

};

export default Home;
