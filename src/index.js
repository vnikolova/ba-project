import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Home from './pages/Home/Home.js';
import {LoginForm} from './components';
import './global.css';

import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(
	(state = {})  => state,
	applyMiddleware(thunk)
	);

ReactDOM.render(
  <Provider store={store}>
  	<Home />
  </Provider>,
  document.getElementById('root')
);
