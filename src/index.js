import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';

/* Configure firebase when page first loads */
// Initialize Firebase
var config = {
  apiKey: "AIzaSyC16Vul2LQet2wpuKr3DhbibQ93Tvz0KIk",
  authDomain: "chirper-2016b.firebaseapp.com",
  databaseURL: "https://chirper-2016b.firebaseio.com",
  storageBucket: "chirper-2016b.appspot.com",
  messagingSenderId: "765231263302"
};
firebase.initializeApp(config);

//load CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//extraneous method call to produce error for non-configured app
firebase.auth(); 