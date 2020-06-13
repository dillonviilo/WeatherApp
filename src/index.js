import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Header.css';
import './location.css';
import './weather.css';
import Header from './Header';
import Location from './location';
import Weather from './weather';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Location />
    <Weather />
  </React.StrictMode>,
  document.getElementById('header')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
