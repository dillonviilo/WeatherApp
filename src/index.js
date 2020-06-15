//--------------------------------------------------
// Index Javascript
// Author: Dillon Viilo
// Date: 6/14/2020
//
// Index sets up all the information for index.html.
// Index imports React and ReactDOM.
// Index imports index, header, location and weather
// style sheets.
// Index imports header, location forecast.
// Weather.js is deprecated but was used to make
// forecast.js
// Imports serviceWorker for performance.
//--------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Header.css';
import './location.css';
import './weather.css';
import Header from './Header';
import Location from './location';
//import Weather from './weather';
import Forecast from './forecast';
import * as serviceWorker from './serviceWorker';

// ReactDOM renders all the information and
// puts it in StrictMode to help prevent and
// catch mistakes.
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Location />
    <Forecast />
  </React.StrictMode>,
  document.getElementById('header')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
