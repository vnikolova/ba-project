import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {Home, Dashboard} from '../pages';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {

  render() {
    injectTapEventPlugin();

    return (
      <MuiThemeProvider>
      <Router>
        <div>
    <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
    </Router></MuiThemeProvider>

      );
  }
};

export default App;
