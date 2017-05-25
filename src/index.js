import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Home, Dashboard} from './pages';
import {LoginForm, App} from './components';
import './global.css';

import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(
	(state = {})  => state,
	applyMiddleware(thunk)
	);

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
);
