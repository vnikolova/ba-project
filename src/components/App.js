import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {Home, Dashboard} from '../pages';

class App extends Component {

  render() {
    return (
        <Router>
        	<div>
			<Route exact path="/" component={Home} />
    		<Route path="/dashboard" component={Dashboard} />
			</div>
  		</Router>
      );
  }
};

export default App;
