import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';

let store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
