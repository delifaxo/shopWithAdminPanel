import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppFront from './AppFront';
import AppAdmin from './AppAdmin';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Store/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <AppAdmin />
      <AppFront />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
